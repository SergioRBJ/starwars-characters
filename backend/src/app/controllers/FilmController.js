import Film from '../models/Film';
import Avatar from '../models/Avatar';

class FilmController {
  async index(req, res) {
    const films = await Film.findAll({
      order: ['episode_id'],
      attributes: [
        'title',
        'episode_id',
        'opening_crawl',
        'director',
        'producer',
        'release_date',
      ],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(films);
  }
}

export default new FilmController();
