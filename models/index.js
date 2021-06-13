// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // testing code below, I understand need to delete products to empty out a category before you can delete a category. Proably a good thing you can't delete a category and cascade delete products. Mass product deletion is not a good thing.
  // onDelete: 'cascade',
  // onUpdate: 'cascade',
  // hooks: true
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
   // testing code below, I understand need to delete products to empty out a category before you can delete a category. Proably a good thing you can't delete a category and cascade delete products. Mass product deletion is not a good thing.
  //  onDelete: 'cascade',
  //  onUpdate: 'cascade',
  //  hooks: true
} )

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
