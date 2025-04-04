const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false,
  }
);

// Import models
const Role = require("./role.model");
const User = require("./user.model");
const Otp = require("./Otp.model");
const Vehicle = require("./vehicles.model");
const VehicleType = require("./vehiclestype.model");
const IoTDevice = require("./IoTDevice.model");
const DockingStation = require("./DockingStation.model");

// Define associations

// Role-User
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

// User-Otp
Otp.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Otp, { foreignKey: "user_id" });

// Vehicle Associations
Vehicle.belongsTo(VehicleType, { foreignKey: "vehicle_type_id" });
Vehicle.belongsTo(IoTDevice, { foreignKey: "device_id" });
Vehicle.belongsTo(DockingStation, { foreignKey: "station_id" });

// Export all models and sequelize instance
const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection established.");
    await sequelize.sync({ alter: true }); // Use { force: true } in dev only
    console.log(" Models synchronized.");
  } catch (err) {
    console.error(" Unable to connect to DB:", err);
  }
};

module.exports = {
  sequelize,
  initDB,
  Role,
  User,
  Otp,
  Vehicle,
  VehicleType,
  IoTDevice,
  DockingStation,
};
