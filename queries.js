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

const getDifficulties = async (type) => {
  const result = await database("ranks").select("*").where("type", type);
  return result;
};

//get questions (lesson id)
const getQuestions = async (lesson_id) => {
  const result = await database("questions")
    .select("*")
    .where("lesson_id", lesson_id);
  return result;
};

const getLesson = async (lesson_id) => {
  const result = await database("lessons")
    .select("*")
    .where("id", lesson_id);
  return result;
}

const getLessons = async (rank_id) => {
  const result = await database("lessons")
    .select("*")
    .where("rank_id", rank_id);
  return result;
};

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

const getScores = async (rank_id) => {
  const result = await database("ranks").select("*").where("id", rank_id);
  return result;
};

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

const getTypeTotalScores = async () => {
  const result = await database("ranks")
    .select("type")
    .sum("total_points as sum_total")
    .sum("current_points as sum_current")
    .groupBy("type");
  return result;
};

const updateLessonScore = async (lesson_id) => {
  database("lessons")
}

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
  updateLessonScore
};
