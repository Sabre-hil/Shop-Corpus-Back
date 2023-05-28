const { Review } = require('../db/models');

class ReviewController {
  async create(req, res) {
    try {
      const { comment, star } = req.body;
      const { id } = req.params;
      const userId = req.session.user.id;
      const review = await Review.create({
        comment,
        star,
        user_id: userId,
        furniture_id: id,
      });
      return res.json(review);
    } catch (error) {
      return res.status(400);
    }
  }

  async update(req, res) {
    try {
      const { comment, star } = req.body;
      const { id } = req.params;
      const findReview = await Review.findOne({ where: { id: +id } });
      const result = await findReview.update({ comment, star });
      return result;
    } catch (error) {
      return res.json(400).end();
    }
  }

  async getAllReview(req, res) {
    try {
      const reviews = await Review.findAll();
      return res.json(reviews);
    } catch (error) {
      return res.status(400).end();
    }
  }

  async getOneReview(req, res) {
    try {
      const { id } = req.params;
      const review = await Review.findByPk(+id);
      return res.json(review);
    } catch (error) {
      return res.status(400).end();
    }
  }

  async deleteReview(req, res) {
    try {
      const { id } = req.params;
      const deleteReview = await Review.destroy({ where: { id: +id } });
      return res.json(deleteReview);
    } catch (error) {
      return res.status(400).end();
    }
  }
}

module.exports = new ReviewController();
