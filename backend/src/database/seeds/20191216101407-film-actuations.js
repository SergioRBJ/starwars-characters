module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'actuations',
      [
        {
          character_id: 1,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 1,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 1,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 1,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 1,
          film_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 2,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 3,
          film_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 4,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 4,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 4,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 4,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 5,
          film_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 5,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 5,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 5,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 5,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 6,
          film_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 6,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 6,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 7,
          film_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 7,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 7,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 8,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 9,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character_id: 10,
          film_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
