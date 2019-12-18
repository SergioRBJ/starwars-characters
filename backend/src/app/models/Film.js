import Sequelize, { Model } from 'sequelize';

class Film extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        episode_id: Sequelize.INTEGER,
        opening_crawl: Sequelize.STRING(2048),
        director: Sequelize.STRING,
        producer: Sequelize.STRING,
        release_date: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Avatar, { foreignKey: 'avatar_id', as: 'avatar' });

    this.belongsToMany(models.Character, {
      through: 'actuations',
      as: 'characters',
      foreignKey: 'film_id',
    });
  }
}

export default Film;
