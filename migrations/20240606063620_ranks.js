/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .renameTable("difficulties", "ranks")
    .alterTable("ranks", function (table) {
      table.bigInteger("total_points");
      table.bigInteger("current_points");
      table.boolean("unlocked");
      table.boolean("completed");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ranks");
};
