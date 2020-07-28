; 
'use strict'

const express = require('express');
const router = express.Router();
const storage  = require('../middlewares/multer');
const Estudiante = require('../models/estudiante');
const { crearOne, getOne, actualizar, eliminar  } = require('../controllers/estudiante.controller');

router.post('/std', storage.single('file'), crearOne);
router.get('/std/:id', getOne);
router.patch('/std/:id', actualizar);
router.delete('/std/:id', eliminar);

module.exports = router;