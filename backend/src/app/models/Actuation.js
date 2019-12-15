import Sequelize, { Model } from 'sequelize';

class Actuation extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Film);
    this.belongsTo(models.Film, { foreignKey: 'film_id', as: 'film' });
    this.hasMany(models.Character);
    this.belongsTo(models.Character, {
      foreignKey: 'character_id',
      as: 'character',
    });
  }
}

export default Actuation;
