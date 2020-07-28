;
'use strict'

const express = require('express');
const router = express.Router();
const { crearOne, getAll } = require('../controllers/usuario.controller');

router.post('/usr',  crearOne);
router.get('/usr', getAll);

module.exports = router;