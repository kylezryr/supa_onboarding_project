/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("questions").del();
  await knex("questions").insert([
    {
      id: 1,
      lesson_id: 1,
      question_number: 1,
      question_text: "What is a Bounding Box?",
      answers: ["A box", "A tool", "An annnotation tool", "None of the above"],
      correct_answer: 2,
      practice: true,
      points: 50,
    },
    {
      id: 2,
      lesson_id: 1,
      question_number: 2,
      question_text: "Question 2",
      answers: ["A", "B", "C", "D"],
      correct_answer: 0,
      practice: true,
      points: 50,
    },
    {
      id: 3,
      lesson_id: 1,
      question_number: 3,
      question_text: "Question 3",
      answers: ["A", "B", "C", "D"],
      correct_answer: 1,
      practice: true,
      points: 50,
    },
    {
      id: 4,
      lesson_id: 1,
      question_number: 1,
      question_text: "Real Question 1",
      answers: ["A", "B", "C", "D"],
      correct_answer: 1,
      practice: false,
      points: 50,
    },
    {
      id: 5,
      lesson_id: 1,
      question_number: 2,
      question_text: "Real Question 2",
      answers: ["A", "B", "C", "D"],
      correct_answer: 3,
      practice: false,
      points: 50,
    },
    {
      id: 6,
      lesson_id: 1,
      question_number: 3,
      question_text: "Real Question 3",
      answers: ["A", "B", "C", "D"],
      correct_answer: 2,
      practice: false,
      points: 50,
    },
    {
      id: 7,
      lesson_id: 2,
      question_number: 1,
      question_text: "Question 1",
      answers: ["A", "B", "C", "D"],
      correct_answer: 2,
      practice: true,
      points: 50,
    },
  ]);
};
