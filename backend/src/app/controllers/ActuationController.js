import Character from '../models/Character';
import Actuation from '../models/Actuation';
import Avatar from '../models/Avatar';

class ActuationController {
  async index(req, res) {
    const { film } = req.params;
    const actuations = await Actuation.findAll({
      where: { film_id: film },
      order: ['id'],
      attributes: ['id'],
      include: [
        {
          model: Character,
          as: 'character',
          attributes: [
            'name',
            'height',
            'mass',
            'hair_color',
            'skin_color',
            'eye_color',
            'birth_year',
            'gender',
          ],
          include: [
            {
              model: Avatar,
              as: 'avatar',
              attributes: ['url'],
            },
          ],
        },
      ],
    });
    return res.json(actuations);
  }
}

export default new ActuationController();
