module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mass: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hair_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      skin_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eye_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      avatar_id: {
        type: Sequelize.INTEGER,
        references: { model: 'avatars', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
    return queryInterface.dropTable('characters');
  },
};
