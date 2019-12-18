import Film from '../models/Film';
import Character from '../models/Character';
import Avatar from '../models/Avatar';

class FilmController {
  async index(req, res) {
    const films = await Film.findAll({
      order: ['episode_id'],
      attributes: [
        'id',
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
        {
          model: Character,
          as: 'characters',
          through: { attributes: [] },
        },
      ],
    });

    return res.json(films);
  }

  async show(req, res) {
    const films = await Film.findOne({
      attributes: [
        'id',
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
        {
          model: Character,
          as: 'characters',
          through: { attributes: [] },
        },
      ],
      where: { id: req.params.id }
    });

    return res.json(films);
  }
}

export default new FilmController();
