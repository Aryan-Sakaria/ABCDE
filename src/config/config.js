/* ======================
   src/config/config.js
   - Centralized configuration
   - Loads all env variables at once
   ====================== */
   const dotenv = require("dotenv");
   dotenv.config();
   
   module.exports = {
       port: process.env.PORT,
       db: {
           name: process.env.DB_NAME,
           user: process.env.DB_USER,
           pass: process.env.DB_PASS,
           host: process.env.DB_HOST,
       },
   };