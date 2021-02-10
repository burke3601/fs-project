const express = require('express');
const router = express.Router();

const riverController = require('../controllers/river')

router
    .get('/rocja')
    .get('/getStation/:name')
    