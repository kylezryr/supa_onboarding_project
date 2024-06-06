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

const getDifficulties = async( type ) => {    
    const result = await database("difficulties").select('*').where('type', type)
    return result;
}

//get questions (lesson id)
const getQuestions = async( lesson_id ) => {
  const result = await database("questions").select('*').where('lesson_id', lesson_id);
  return result;
}

const getLessons = async( rank_id ) => {
  const result = await database("lessons").select('*').where('rank_id', rank_id)
  return result;
}

const getRankID = async( type, difficulty, level) => {
  const result = await database("difficulties").where({type: typesMap.get(type), difficulty: diffMap.get(difficulty), level: level}).select('id')
  return result;
}

const getLessonID = async( type, difficulty, level, lesson_number) => {
  const result = await database("lessons").where({type: typesMap.get(type), difficulty: diffMap.get(difficulty), level: level, lesson_number: lesson_number}).select('id')
  return result;
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
};
