import api from '../services/api';
import Film from '../app/models/Film';
import Character from '../app/models/Character';

class Sync {
  constructor() {
    this.handleFilms();
  }

  async handleFilms() {
    const response = await api.get('/films');

    const { results } = response.data;

    let cont = 0;
    await results.forEach(async film => {
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

    return this.handleCharacters();
  }

  async handleCharacters(page = 1) {
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
        films,
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
       * If exists Validation
       */
      const charExists = await Character.findOne({ where: { name } });
      if (!charExists) {
        /*
         * Store characters into db.
         */
        const charCreated = await Character.create(storedChar);

        if (films && films.length > 0) {
          /*
           * Get film id.
           */
          const actuations = films.map(film => {
            const idFilm = Number(
              film.substring(film.length - 2, film.length - 1)
            );

            return idFilm;
          });

          /*
           * Store relations with films.
           */
          await charCreated.setFilms(actuations);
        }
      }

      return characters;
    });
  }
}
export default new Sync();
