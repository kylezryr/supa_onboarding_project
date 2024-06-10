/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("lessons").del();
  await knex("lessons").insert([
    {
      id: 1,
      rank_id: 1,
      type: "Bounding Box",
      difficulty: "Green",
      level: 1,
      lesson_number: 1,
      title: "Image annotation",
      description:
        "This is the first lesson of image annotation for Bounding Box Green 1",
      passed: false,
      unlocked: true,
      total_points: 150,
      current_points: 0,
    },
    {
      id: 2,
      rank_id: 1,
      type: "Bounding Box",
      difficulty: "Green",
      level: 1,
      lesson_number: 2,
      title: "Image annotation II",
      description:
        "This is the second lesson of image annotation for Bounding Box Green 1",
      passed: false,
      unlocked: false,
      total_points: 150,
      current_points: 0,
    },
    {
      id: 3,
      rank_id: 1,
      type: "Bounding Box",
      difficulty: "Green",
      level: 1,
      lesson_number: 3,
      title: "Advanced image annotation",
      description:
        "This is the third lesson for Bounding Box Green 1 about advanced image annotation",
      passed: false,
      unlocked: false,
      total_points: 150,
      current_points: 0,
    },
    {
      id: 4,
      rank_id: 2,
      type: "Bounding Box",
      difficulty: "Green",
      level: 2,
      lesson_number: 1,
      title: "Drawing boxes",
      description:
        "This is the first lesson for Bounding Box Green 2 about drawing boxes",
      passed: false,
      unlocked: false,
      total_points: 150,
      current_points: 0,
    },
  ]);
};
