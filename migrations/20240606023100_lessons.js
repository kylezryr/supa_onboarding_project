/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("lessons", (table) => {
        table.increments(); // this represents the primary key.
        table.bigInteger("rank_id"); // this is a column.
        table.text("type");
        table.text("difficulty");
        table.integer("level");
        table.integer("lesson_number");
        table.text("title");
        table.text("description");
        table.bigInteger("total_points");
        table.boolean("passed");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lessons");
};
