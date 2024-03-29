// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./product-tag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:"category_id",
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:"category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  foreignKey:"product_id",
  through: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  foreignKey:"tag_id",
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};