const { Role } = require("../models");

const createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const role = await Role.create({ name });
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRole, getRoles };
