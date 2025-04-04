const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Role = require("./role.model");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },   
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Role,
            key: "id"
        }
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

User.belongsTo(Role, { foreignKey: "role_id" });

module.exports = User;
