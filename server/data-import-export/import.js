const allData = require('./dump.json');
require('dotenv').config({ path: '../.env' });
const { Data } = require('../models');

allData.forEach(d => {
  Data.create({
    ...d
  }).then(r => {
    console.log(`added ${r.id}`);
  });
});
