/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("questions", (table) => {
        table.increments(); // this represents the primary key.
        table.bigInteger("lesson_id"); // this is a column.
        table.integer("question_number");
        table.string("question_text");
        table.specificType("answers", "text ARRAY")
        table.integer("correct_answer");
        table.boolean("practice");
        table.bigInteger("points");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("questions");
};
