const express = require("express");
const { createRole, getRoles } = require("../controllers/role.controller");

const router = express.Router();

router.post("/", createRole);
router.get("/", getRoles);

module.exports = router;
