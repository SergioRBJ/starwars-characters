import api from '../services/api';
import Film from '../app/models/Film';

class Sync {
  constructor() {
    this.getFilms();
  }

  async getFilms() {
    const response = await api.get('/films');

    const { results } = response.data;

    const films = results.forEach(async film => {
      const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
      } = film;

      const storefilm = {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date: new Date(release_date),
      };

      /*
       *If exists Validation
       */
      const storedfilms = await Film.findOne({ where: { episode_id } });
      if (!storedfilms) {
        await Film.create(storefilm);
      }
    });

    return films;
  }

  async getCharacters() {
    const response = await api.get(`/repos/`);

    console.log(response.data);
    return response;
  }
}
export default new Sync();
