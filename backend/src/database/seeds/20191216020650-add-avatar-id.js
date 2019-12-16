module.exports = {
  up: QueryInterface => {
    Promise.All(
      QueryInterface.bulkUpdate(
        'films',
        {
          avatar_id: 2,
        },
        {
          id: 1,
        }
      )
    );
  },

  down: () => {},
};
