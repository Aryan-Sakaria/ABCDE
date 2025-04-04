const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");


const Coupon = sequelize.define("coupon", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coupon_code: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    discount: { type: DataTypes.FLOAT, allowNull: false },
    expire_date: { type: DataTypes.DATE, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  module.exports = Coupon;