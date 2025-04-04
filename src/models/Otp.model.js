const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model"); // Ensure this path is correct and `user.model.js` exports the User model

const OTP = sequelize.define("otp", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    otp: { type: DataTypes.STRING, allowNull: false },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: User, key: "id" }
    },
    expires_at: { type: DataTypes.DATE, allowNull: false }
});

// Associations
OTP.belongsTo(User, { foreignKey: "user_id" });

module.exports = OTP;
