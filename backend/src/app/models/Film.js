import Sequelize, { Model } from 'sequelize';

class Film extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        episode_id: Sequelize.INTEGER,
        opening_crawl: Sequelize.STRING,
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
  }
}

export default Film;
