const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const VehicleType = require("./vehiclestype.model");
const IoTDevice = require("./IoTDevice.model");
const DockingStation = require("./DockingStation.model");




const Vehicle = sequelize.define("vehicle", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    model_name: { type: DataTypes.STRING(255), allowNull: false },
    vehicle_type_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: VehicleType, key: "id" } },
    color: { type: DataTypes.STRING(10), allowNull: false },
    device_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: IoTDevice, key: "id" } },
    station_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: DockingStation, key: "id" } },
    is_booked: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    battery_level: { type: DataTypes.FLOAT, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });

  Vehicle.belongsTo(VehicleType, { foreignKey: "vehicle_type_id" });
  Vehicle.belongsTo(DockingStation, { foreignKey: "station_id" });
  Vehicle.belongsTo(IoTDevice, { foreignKey: "device_id" });

  module.exports = Vehicle;
  