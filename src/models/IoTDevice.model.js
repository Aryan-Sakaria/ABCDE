const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const IoTDevice = sequelize.define("iot_device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    device_name: { type: DataTypes.STRING(255), allowNull: false },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  module.exports = IoTDevice;