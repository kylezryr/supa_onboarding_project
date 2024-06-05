/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("difficulties", (table) => {
    table.increments(); // this represents the primary key.
    table.string("type"); // this is a column.
    table.string("difficulty");
    table.integer("level");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("difficulties");
};
