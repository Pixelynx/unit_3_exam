const express = require('express');
const router = express.Router();
const {
        getAllAnimals,
        getOneAminal,
        addAminal,
        updateAminal,
        killAminal
      } = require('../database/queries/animals_query');

router.get('/', getAllAnimals);
router.get('/:id', getOneAminal);
router.post('/', addAminal);
router.put('/:id', updateAminal);
router.delete('/:id', killAminal);

module.exports = router;
