import {Sequelize} from "sequelize";

export const db = new Sequelize('restapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })

export default db;