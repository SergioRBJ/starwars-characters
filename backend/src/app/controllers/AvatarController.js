import Avatar from '../models/Avatar';
import Character from '../models/Character';
import Film from '../models/Film';

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const { id: character, ent } = req.params;

    const file = await Avatar.create({
      name,
      path,
    });

    if (ent === 'Character') {
      await Character.update(
        { avatar_id: file.id },
        { where: { id: character } }
      );
    }

    if (ent === 'Film') {
      await Film.update({ avatar_id: file.id }, { where: { id: character } });
    }

    return res.json(file);
  }
}

export default new AvatarController();
