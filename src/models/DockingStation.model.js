const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Franchise= require("./Franchise.model");
const User= require("./user.model");





const DockingStation = sequelize.define("docking_station", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    franchise_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Franchise, key: "id" } },
    station_master_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
    latitude: { type: DataTypes.STRING(20), allowNull: false },
    longitude: { type: DataTypes.STRING(20), allowNull: false },
    total_capacity: { type: DataTypes.INTEGER, allowNull: false },
    available_slots: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false }, // PostgreSQL supports arrays
    geofence_radius: { type: DataTypes.INTEGER, allowNull: false },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  // Define associations
  DockingStation.belongsTo(Franchise, { foreignKey: "franchise_id" });
  DockingStation.belongsTo(User, { foreignKey: "station_master_id" });
  
  module.exports = DockingStation;