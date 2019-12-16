module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'avatars',
      [
        {
          name: 'aotc-film-bg.jpg',
          path: '52edbced1489bd26320d6a14bb5f9ccf.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'tpm-film-bg.jpg',
          path: 'a682e63b60b06b46af90445fb57a8121.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'rods-film-bg.jpg',
          path: '7cf489ca380efbf4eba6f13f566d53ee.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'rotj-film-bg.jpg',
          path: '6231f85a31df5c85276cd2cc77b8933f.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'tfa.jpg',
          path: 'a119553d40175ceca095c904bc2ded5f.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'tesb-film-bg.jpg',
          path: '567fd8274b7a7c1bde7faf1bdeff8c29.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ang-film-bg.jpg',
          path: '2a2aff31c95117f5de2125a84249a13f.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
