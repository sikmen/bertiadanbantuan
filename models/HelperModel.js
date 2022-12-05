import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Helper = db.define('help',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    deskripsi: DataTypes.TEXT
},{
    freezeTableName:true
});


export default Helper;

(async()=>{
    await db.sync();
})();