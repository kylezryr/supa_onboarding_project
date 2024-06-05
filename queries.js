const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

const getDifficulties = async( type ) => {    
    const result = await database("difficulties").select('*').where('type', type)
    return result;
}

module.exports = {
  getAll() {
    return database("types");
  },
  getDifficulties,
};
