/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("userLevels", (table) => {
        table.increments(); // this represents the primary key.
        table.bigInteger("level_number"); // this is a column.
        table.bigInteger("start_points");
        table.bigInteger("end_points");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("userLevels");
};
