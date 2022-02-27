const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'games',
  },
  {
    tag_name: 'action',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'yellow',
  },
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
