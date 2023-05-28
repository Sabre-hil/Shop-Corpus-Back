const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Furniture extends Model {
    static associate(models) {
      this.hasMany(models.Review, { foreignKey: 'furniture_id' });
      this.hasMany(models.Device_Images, { foreignKey: 'furniture_id' });
    }
  }
  Furniture.init(
    {
      category: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      made: DataTypes.STRING,
      facade: DataTypes.STRING,
      price: DataTypes.STRING,
      discount: DataTypes.BOOLEAN,
      price_discount: DataTypes.STRING,
      size: DataTypes.STRING,
      tabletop: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Furniture',
    }
  );
  return Furniture;
};
