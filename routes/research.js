const express = require('express');
const router = express.Router();
const {
        getResearchers,
        getOneResearcher,
        addResearcher,
        updateResearcher,
        deleteRes
      } = require('../database/queries/research_query')

router.get('/', getResearchers);
router.get('/:id', getOneResearcher);
router.post('/', addResearcher);
router.put('/:id', updateResearcher);
router.delete('/:id', deleteRes);

module.exports = router;
