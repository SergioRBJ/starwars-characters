import api from '../services/api';
import Film from '../app/models/Film';
import Character from '../app/models/Character';
import Actuation from '../app/models/Actuation';

class Sync {
  constructor() {
    this.getFilms();
    this.getCharacters();
    // this.setActuations(1, 1);
  }

  async getFilms() {
    const response = await api.get('/films');

    const { results } = response.data;

    let cont = 0;
    const films = await results.forEach(async film => {
      const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
      } = film;

      const storeFilm = {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date: new Date(release_date),
        avatar_id: `${(cont += 1)}`,
      };

      /*
       *If exists Validation
       */
      const storedFilms = await Film.findOne({ where: { episode_id } });
      if (!storedFilms) {
        await Film.create(storeFilm);
      }
    });

    return films;
  }

  async getCharacters(page = 9) {
    const response = await api.get(`/people/?page=${page}`);

    const { results } = response.data;

    const characters = await results.forEach(async char => {
      const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
      } = char;

      const storedChar = {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
      };

      /*
       *If exists Validation
       */
      // const charExists = await Character.findAll({ where: { name } });
      // if (!charExists) {
      await Character.create(storedChar);
      // }
    });

    // if (page <= 9) {
    // await this.getCharacters(page + 1);
    // }

    return characters;
  }

  async setActuations(characterId, filmId) {
    const actuations = {
      character_id: characterId,
      film_id: filmId,
    };

    const storedActuation = await Actuation.create(actuations);

    return storedActuation;
  }
}
export default new Sync();
