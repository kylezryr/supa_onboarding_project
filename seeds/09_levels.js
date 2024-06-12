/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_levels').del()
  await knex('user_levels').insert([
    {
      id: 1, 
      level_number: 1,
      start_points: 0,
      end_points: 50
    },
    {
      id: 2, 
      level_number: 2,
      start_points: 50,
      end_points: 100
    },
    {
      id: 3, 
      level_number: 3,
      start_points: 100,
      end_points: 200
    },
    {
      id: 4, 
      level_number: 4,
      start_points: 200,
      end_points: 400
    },
    {
      id: 5, 
      level_number: 5,
      start_points: 400,
      end_points: 800
    },
    {
      id: 6, 
      level_number: 6,
      start_points: 800,
      end_points: 1600
    },
    {
      id: 7, 
      level_number: 7,
      start_points: 1600,
      end_points: 3200
    },
    {
      id: 8, 
      level_number: 8,
      start_points: 3200,
      end_points: 6400
    },
    {
      id: 9, 
      level_number: 9,
      start_points: 6400,
      end_points: 12800
    },
    {
      id: 10, 
      level_number: 10,
      start_points: 12800,
      end_points: 20000
    },
  ]);
};
