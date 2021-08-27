import sequelize  from "../index.js";
import s from 'sequelize'
const {DataType} = s

const category = sequelize.define(
    "category",
    {
        id:{
            primaryKey:true,
            type:DataType.INTEGER,
            autoIncrement:true
        },
        name:{
            type:DataType.STRING,
            allowNull:false
        }
    }
)
export default category