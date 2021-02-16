require('dotenv').config({ path: '../.env' });
const { Data } = require('../models');

Data.findAll()
  .then((results) => {
    console.log(JSON.stringify(results, null, 4));
  });
