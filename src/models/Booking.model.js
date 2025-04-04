const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Vehicle = require("./vehicles.model");
const DockingStation = require("./DockingStation.model");
const User =require("./user.model");




const Booking = sequelize.define("booking", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" }, onDelete: "CASCADE" },
    vehicle_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Vehicle, key: "id" }, onDelete: "CASCADE" },
    station_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: DockingStation, key: "id" }, onDelete: "CASCADE" },
    start_time: { type: DataTypes.DATE, allowNull: false },
    end_time: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }, // e.g., "pending", "completed"
    station_master_approval: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    helmet_provided: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  // Associations
  Booking.belongsTo(User, { foreignKey: "user_id" });
  Booking.belongsTo(Vehicle, { foreignKey: "vehicle_id" });
  Booking.belongsTo(DockingStation, { foreignKey: "station_id" });
  
  module.exports = Booking;