import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "mysql",
  username: process.env.DB_ID,
  password: process.env.DB_PW,
  storage: ":memory",
  models: [__dirname + "/models"],
  dialectOptions: {
    useUTC: false //for reading from database
  },
  timezone: "+09:00" //for writing to database
});

export default sequelize;
