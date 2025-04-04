const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");


const Franchise = sequelize.define("franchise", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    address1: { type: DataTypes.TEXT, allowNull: false },
    address2: { type: DataTypes.TEXT, allowNull: true },
    city: { type: DataTypes.STRING(50), allowNull: false },
    state: { type: DataTypes.STRING(50), allowNull: false },
    country: { type: DataTypes.STRING(50), allowNull: false },
    pincode: { type: DataTypes.STRING(10), allowNull: false },
    owner_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true }
  });
  
  // Define associations
  Franchise.belongsTo(User, { foreignKey: "owner_id" });
  
  module.exports = Franchise;