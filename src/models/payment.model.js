const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Booking = require("./Booking.model");

const Payment = sequelize.define("payment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    booking_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Booking, key: "id" }, onDelete: "CASCADE" },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    payment_method: { type: DataTypes.STRING(50), allowNull: false },
    penalty_amount: { type: DataTypes.FLOAT, allowNull: true },
    total_amount: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  module.exports = Payment;