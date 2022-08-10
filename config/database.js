require('dotenv').config();

module.exports = {

  // Connection
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "123456789",
  database: process.env.DB_DATABASE || "ecommercedb",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",

  // Configure Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "ecommercedbSeeds",
};