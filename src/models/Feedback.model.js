const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Booking =require("./Booking.model");


const Feedback = sequelize.define("feedback", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    booking_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: Booking, key: "id" }, onDelete: "SET NULL" },
    name: { type: DataTypes.STRING(50), allowNull: false },
    feedback: { type: DataTypes.TEXT, allowNull: false },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  });
  
  module.exports = Feedback;