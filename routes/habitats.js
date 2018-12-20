const express = require('express');
const router = express.Router();
const {
        getAllHabitats,
        getOneHabitat,
        addNewHabitat
      } = require('../database/queries/habitat_query');

router.get('/', getAllHabitats);
router.get('/:id', getOneHabitat);
router.post('/', addNewHabitat);

module.exports = router;
