import sequelize from "../index.js";
import category from "./category.js";
import Product from "./product.js";



Product.belongsTo(category)
category.hasMany(Product)

export default {category,sequelize,Product}