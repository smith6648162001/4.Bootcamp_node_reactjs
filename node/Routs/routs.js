const express = require('express');
const router = express.Router();
const{getAllmovies, getOneMovie, createOneMovie, updateOneMovie, deleteOneMovie} = require('../models/fun_model');

router.get('/', getAllmovies);
router.get('/:id', getOneMovie);
router.post('/', createOneMovie);
router.delete('/:id', deleteOneMovie);
router.up('/:id', updateOneMovie);

module.exports.inicio = router;