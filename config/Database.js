import {Sequelize} from "sequelize";

export const db = new Sequelize('dbj7qp6p7scgtn', 'ndscrlzychulce', 'a7924f3644bc80b70ec526f845bf4ac152ca86b9d9d52d2e68e5210175009617', {
    host: 'ec2-3-208-79-113.compute-1.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
     },
   },
  })

export default db;