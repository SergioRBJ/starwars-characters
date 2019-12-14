import { Model } from 'sequelize';

class Actuation extends Model {
  static associate(models) {
    this.belongsTo(models.Film, { foreignKey: 'film_id', as: 'film' });
    this.belongsTo(models.Character, {
      foreignKey: 'character_id',
      as: 'character',
    });
  }
}

export default Actuation;
