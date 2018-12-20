const express = require('express');
const router = express.Router();
const {
        getSightings,
        getSpecieSighting,
        getResSightings,
        getHabSightings,
        addSighting,
        deleteSighting
      } = require('../database/queries/sighting_query');

router.get('/', getSightings);
router.get('/species/:id', getSpecieSighting);
router.get('/research/:id', getResSightings);
router.get('/habitats/:id', getHabSightings);
router.post('/', addSighting);
router.delete('/:id', deleteSighting);

module.exports = router;
