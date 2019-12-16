module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('actuations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      character_id: {
        type: Sequelize.INTEGER,
        references: { model: 'characters', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: { model: 'films', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('actuations');
  },
};
