/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("challengeQuestions", (table) => {
    table.increments(); // this represents the primary key.
    table.bigInteger("rank_id"); // this is a column.
    table.integer("question_number");
    table.text("question_text");
    table.text("description");
    table.specificType("answers", "text ARRAY");
    table.integer("correct_answer");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("challengeQuestions");
};
