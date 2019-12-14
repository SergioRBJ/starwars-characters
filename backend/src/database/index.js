import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Film from '../app/models/Film';
import Character from '../app/models/Character';
import Avatar from '../app/models/Avatar';
import Actuation from '../app/models/Actuation';

const models = [Film, Character, Avatar, Actuation];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
