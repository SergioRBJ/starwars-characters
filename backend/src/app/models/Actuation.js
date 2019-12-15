import Sequelize, { Model } from 'sequelize';

class Actuation extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Film, { foreignKey: 'film_id', as: 'film' });
    this.belongsTo(models.Character, {
      foreignKey: 'character_id',
      as: 'character',
    });
  }
}

export default Actuation;
