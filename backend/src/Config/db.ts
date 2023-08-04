import { Sequelize } from "sequelize";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "../Config/config";
import mysql2 from 'mysql2';

const dbName = DATABASE_NAME;
const dbPort = DATABASE_PORT;
const dbUsername = DATABASE_USERNAME;
const dbPassword = DATABASE_PASSWORD;
const dbHost = DATABASE_HOST;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
  port: dbPort,
  dialectModule: mysql2,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
    },
  },
});


export default sequelize;
