/* ======================
   src/models/role.model.js
   - Role Table Definition
   ====================== */
   const { DataTypes } = require("sequelize");
   const sequelize = require("../config/db.config");
   
   const Role = sequelize.define("role", {
       id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
       name: { type: DataTypes.STRING, allowNull: false },
   });
   
   module.exports = Role;