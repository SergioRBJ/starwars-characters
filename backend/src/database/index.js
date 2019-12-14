import Sequelize from 'sequelize';

import Film from '../app/models/Film';
import Character from '../app/models/Character';
import Avatar from '../app/models/Avatar';
import Actuation from '../app/models/Actuation';

import databaseConfig from '../config/database';

const models = [Avatar, Actuation, Character, Film];

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
