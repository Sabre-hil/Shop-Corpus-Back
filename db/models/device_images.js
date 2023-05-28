const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Device_Images extends Model {
    static associate(models) {
      this.belongsTo(models.Furniture, { foreignKey: 'furniture_id' });
    }
  }
  Device_Images.init(
    {
      path: DataTypes.STRING,
      furniture_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Device_Images',
    }
  );
  return Device_Images;
};
