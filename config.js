const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.PORT || 8080,
    HOST: process.env.HOST || "127.0.0.1"
}