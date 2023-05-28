const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Furniture, { foreignKey: 'furniture_id' });
    }
  }
  Review.init(
    {
      comment: DataTypes.STRING,
      star: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      furniture_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
