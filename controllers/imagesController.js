const uuid = require('uuid');
const path = require('path');
const { Device_Images } = require('../db/models');

class ImagesController {
  async createImage(req, res) {
    try {
      const { img } = req.files;
      const { id } = req.params;
      const fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const image = await Device_Images.create({
        path: fileName,
        furniture_id: id,
      });
      return res.json(image);
    } catch (error) {
      return res.status(400).end();
    }
  }
}

module.exports = new ImagesController();
