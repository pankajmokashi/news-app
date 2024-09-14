require("dotenv").config();

const config = {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
};

module.exports = config;
