const { Furniture, Device_Images } = require('../db/models');
const ApiError = require('../error/ApiError');

class FurnitureController {
  async getAll(req, res) {
    try {
      const furnitures = await Furniture.findAll({
        include: {
          model: Device_Images,
        },
      });
      return res.json(furnitures);
    } catch (error) {
      return res.status(400).end();
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(ApiError.badReques('Не задан ID'));
      }
      const furniture = await Furniture.findByPk(+id);
      return res.json(furniture);
    } catch (error) {
      return res.status(400).end();
    }
  }
}

module.exports = new FurnitureController();
// async check(req, res, next) {
//   const { id } = req.query;
//   if (!id) {
//     return next(ApiError.badReques('Не задан ID'));
//   }
//   return res.json(id);
// }
// }
