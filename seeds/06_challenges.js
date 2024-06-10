/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("challenge_questions").del();
  await knex("challenge_questions").insert([
    {
      id: 1,
      rank_id: 1,
      question_number: 1,
      question_text: "Challenge Question 1",
      answers: ["A", "B", "C", "D"],
      correct_answer: 2,
    },
    {
      id: 2,
      rank_id: 1,
      question_number: 2,
      question_text: "Challenge Question 2",
      answers: ["A", "B", "C", "D"],
      correct_answer: 0,
    },
    {
      id: 3,
      rank_id: 1,
      question_number: 3,
      question_text: "Challenge Question 3",
      answers: ["A", "B", "C", "D"],
      correct_answer: 3,
    },
  ]);
};
