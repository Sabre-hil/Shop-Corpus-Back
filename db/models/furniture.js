const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Furniture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Furniture, { foreignKey: 'furniture_id' });
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
