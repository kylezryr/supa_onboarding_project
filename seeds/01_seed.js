/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("types").del();
  await knex("types").insert([
    { id: 1, type: "Bounding Box", navigation: "boundingBox" },
    { id: 2, type: "Semantic", navigation: "semantic" },
    { id: 3, type: "Polygon", navigation: "polygon" },
  ]);
};
