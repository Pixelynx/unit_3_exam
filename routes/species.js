const express = require('express');
const router = express.Router();
const {
        getAllSpecies,
        getSingleSpecies,
        addSpecie
      } = require('../database/queries/species_query');

router.get('/', getAllSpecies);
router.get('/:id', getSingleSpecies);
router.post('/', addSpecie);

module.exports = router;
