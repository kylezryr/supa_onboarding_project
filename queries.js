const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

const knex = require("knex");

const typesMap = new Map([
  ["boundingBox", "Bounding Box"],
  ["semantic", "Semantic"],
  ["polygon", "Polygon"],
]);
const diffMap = new Map([
  ["red", "Red"],
  ["green", "Green"],
  ["yellow", "Yellow"],
]);

//gets all ranks available for a specific skill type
const getDifficulties = async (type) => {
  const result = await database("ranks")
    .select("*")
    .where("type", type)
    .orderBy("id");
  return result;
};

//get questions (lesson id)
const getQuestions = async (lesson_id) => {
  const result = await database("questions")
    .select("*")
    .where("lesson_id", lesson_id)
    .orderBy("id");
  return result;
};

//returns a single lesson using lesson id
const getLesson = async (lesson_id) => {
  const result = await database("lessons").select("*").where("id", lesson_id);
  return result;
};

//returns all lessons for a rank_id
const getLessons = async (rank_id) => {
  const result = await database("lessons")
    .select("*")
    .where("rank_id", rank_id)
    .orderBy("id");
  return result;
};

//returns the rankID for a rank using the parameters below
const getRankID = async (type, difficulty, level) => {
  const result = await database("ranks")
    .where({
      type: typesMap.get(type),
      difficulty: diffMap.get(difficulty),
      level: level,
    })
    .select("id");
  return result;
};

//returns the lessonID for a lesson using the parameters below
const getLessonID = async (type, difficulty, level, lesson_number) => {
  const result = await database("lessons")
    .where({
      type: typesMap.get(type),
      difficulty: diffMap.get(difficulty),
      level: level,
      lesson_number: lesson_number,
    })
    .select("id");
  return result;
};

//selects row in ranks using rank_id
const getScores = async (rank_id) => {
  const result = await database("ranks").select("*").where("id", rank_id);
  return result;
};

//get the highest rank the user is at for each skill type
//returns the rank with the highest points that is not completed
const getMaxRanks = async () => {
  const subQuery = database("ranks")
    .select("type", "id")
    .max("current_points as current_points")
    .where("completed", false)
    .andWhere("unlocked", true)
    .groupBy("type", "id")
    .orderBy("id");
  const result = await database("ranks")
    .distinctOn("type")
    .whereIn(["type", "id", "current_points"], subQuery);
  return result;
};

//sums up points for each type by summing up lesson scores
//used in Playground landing page
const getTypeTotalScores = async () => {
  const result = await database("ranks")
    .select("type")
    .sum("total_points as sum_total")
    .sum("current_points as sum_current")
    .groupBy("type");
  return result;
};

//returns the rank challenge questions for the rank id
const getChallengeQuestions = async (rank_id) => {
  const result = await database("challenge_questions")
    .select("*")
    .where("rank_id", rank_id)
    .orderBy("id");
  return result;
};

//returns T/F depending on whether rank challenge should be shown
//true if user has scored full points on all 3 lessons
const getShowRankChallenge = async (rank_id) => {
  const result = await database("lessons")
    .select("passed")
    .where("rank_id", rank_id)
    .andWhereRaw("?? = ??", ["current_points", "total_points"]);
  return result.length > 2;
};

//get the users current level based on their total points
//returns level row
const getCurrentLevel = async () => {
  const totalPoints = await database("ranks").sum(
    "current_points as total_points",
  );
  const userCurrentPoints = Number(totalPoints[0].total_points);

  const result = await database("user_levels")
    .select("id", "level_number", "start_points", "end_points")
    .where("start_points", "<=", userCurrentPoints)
    .andWhere("end_points", ">", userCurrentPoints)
    .first();

  if (result) {
    result.current_points = userCurrentPoints - result.start_points;
  }

  return result;
};

//gets the next rank passing in rank id
//to display Up next button
const getNextRank = async (rank_id) => {
  const result = await database("ranks")
    .select("*")
    .where("id", Number(rank_id) + 1)
    .first();
  return result;
};

//updates the lesson's score only if the new score beats the current score
//unlocks the next lesson once complete
//also updates the associated rank's score
//unlocks the next rank if total pts = curr pts (edge case when user comes back to complete lesson
//but rank doesnt update)
const updateLessonScore = async (lesson_id, score, rank_id) => {
  const scoreData = await database("lessons")
    .select("current_points", "total_points")
    .where("id", lesson_id);

  if (Number(score) >= Number(scoreData[0].current_points)) {
    const result = await database("lessons")
      .where("id", lesson_id)
      .update({ current_points: score, passed: true });

    //incrementing current_points in the rank by points scored
    const ranks = await database("ranks")
      .where("id", rank_id)
      .increment(
        "current_points",
        Number(score) - Number(scoreData[0].current_points),
      );
  } else {
    console.log("score lower than current score");
  }

  //unlocking the next lesson
  if (Number(score) > scoreData[0].total_points / 2) {
    const nextLesson = await database("lessons")
      .where("id", Number(lesson_id) + 1)
      .update("unlocked", true);
  }
};

//mark the current rank as complete and unlocks the next rank if total points = current points
//a rank is only complete once the user passes the rank challenge
const updateRankCompleted = async (rank_id) => {
  if (rankID != 9 || rankID != 18 || rankID != 27) {
    const completedData = await database("ranks")
      .where("id", rank_id)
      .update("completed", true);
  }

  const rankData = await database("ranks").select("*").where("id", rank_id);
  const current_points = rankData[0].current_points;
  const total_points = rankData[0].total_points;
  const rankID = Number(rankData[0].id);
  const completed = rankData[0].completed;
  if (Number(current_points) == Number(total_points) && completed) {
    if (rankID != 9 || rankID != 18 || rankID != 27) {
      const nextRank = await database("ranks")
        .where("id", Number(rank_id) + 1)
        .update("unlocked", true);
    }
  }
};

module.exports = {
  getAll() {
    return database("types");
  },
  getDifficulties,
  getQuestions,
  getLessons,
  getRankID,
  getLessonID,
  getScores,
  getAllRanks() {
    return database("ranks");
  },
  getMaxRanks,
  getTypeTotalScores,
  getLesson,
  getChallengeQuestions,
  getShowRankChallenge,
  getCurrentLevel,
  getNextRank,
  updateLessonScore,
  updateRankCompleted,
};
