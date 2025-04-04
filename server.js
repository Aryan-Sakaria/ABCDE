const app = require("./src/app");
const { sequelize, initDB } = require("./src/models");

const PORT = process.env.PORT || 8080;

(async () => {
    await initDB(); // Connect and sync database
    app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });
})();
