const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

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
    .select("type")
    .max("current_points as current_points")
    .where("completed", false)
    .groupBy("type");
  const result = await database("ranks").whereIn(
    ["type", "current_points"],
    subQuery,
  );
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

//updates the lesson's score  only if the new score beats the current score
//also updates the associated rank's score
const updateLessonScore = async (lesson_id, score, rank_id) => {
  const scoreData = await database("lessons").select("current_points").where("id", lesson_id);
  if (Number(score) >= Number(scoreData[0].current_points)) {
    const result = await database("lessons")
    .where("id", lesson_id)
    .update({ current_points: score, passed: true });
    const ranks = await database("ranks")
    .where("id", rank_id)
    .increment("current_points", Number(score) - Number(scoreData[0].current_points));
    const completed = await database("ranks")
    .whereRaw("?? = ??", ["current_points", "total_points"])
    .update("completed", true)
  } else {
   console.log("score lower than current score") 
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
  updateLessonScore,
};
