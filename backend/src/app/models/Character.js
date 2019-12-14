import Sequelize, { Model } from 'sequelize';

class Character extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        height: Sequelize.INTEGER,
        mass: Sequelize.INTEGER,
        hair_color: Sequelize.STRING,
        skin_color: Sequelize.STRING,
        eye_color: Sequelize.STRING,
        birth_year: Sequelize.STRING,
        gender: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Avatar, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Character;
