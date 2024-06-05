/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("difficulties").del();
  await knex("difficulties").insert([
    { id: 1, type: "Bounding Box", difficulty: "Red", level: 1 },
    { id: 2, type: "Bounding Box", difficulty: "Red", level: 2 },
    { id: 3, type: "Bounding Box", difficulty: "Red", level: 3 },
    { id: 4, type: "Bounding Box", difficulty: "Yellow", level: 1 },
    { id: 5, type: "Bounding Box", difficulty: "Yellow", level: 2 },
    { id: 6, type: "Bounding Box", difficulty: "Yellow", level: 3 },
    { id: 7, type: "Bounding Box", difficulty: "Green", level: 1 },
    { id: 8, type: "Bounding Box", difficulty: "Green", level: 2 },
    { id: 9, type: "Bounding Box", difficulty: "Green", level: 3 },
    { id: 10, type: "Semantic", difficulty: "Red", level: 1 },
    { id: 11, type: "Semantic", difficulty: "Red", level: 2 },
    { id: 12, type: "Semantic", difficulty: "Red", level: 3 },
    { id: 13, type: "Semantic", difficulty: "Yellow", level: 1 },
    { id: 14, type: "Semantic", difficulty: "Yellow", level: 2 },
    { id: 15, type: "Semantic", difficulty: "Yellow", level: 3 },
    { id: 16, type: "Semantic", difficulty: "Green", level: 1 },
    { id: 17, type: "Semantic", difficulty: "Green", level: 2 },
    { id: 18, type: "Semantic", difficulty: "Green", level: 3 },
    { id: 19, type: "Polygon", difficulty: "Red", level: 1 },
    { id: 20, type: "Polygon", difficulty: "Red", level: 2 },
    { id: 21, type: "Polygon", difficulty: "Red", level: 3 },
    { id: 22, type: "Polygon", difficulty: "Yellow", level: 1 },
    { id: 23, type: "Polygon", difficulty: "Yellow", level: 2 },
    { id: 24, type: "Polygon", difficulty: "Yellow", level: 3 },
    { id: 25, type: "Polygon", difficulty: "Green", level: 1 },
    { id: 26, type: "Polygon", difficulty: "Green", level: 2 },
    { id: 27, type: "Polygon", difficulty: "Green", level: 3 },
  ]);
};
