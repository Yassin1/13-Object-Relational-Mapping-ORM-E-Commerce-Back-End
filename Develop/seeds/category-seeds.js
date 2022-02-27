const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'books',
  },
  {
    category_name: 'toys',
  },
  {
    category_name: 'games',
  },
  {
    category_name: 'candy',
  },
  {
    category_name: 'cars',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
