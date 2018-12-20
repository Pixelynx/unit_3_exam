const express = require('express');
const router = express.Router();
const {
        getAllTags,
        getOneTag,
        getResearchTag,
        getAniTaggings,
        newTagging
      } = require('../database/queries/tag_query');

router.get('/', getAllTags);
router.get('/:id', getOneTag);
router.get('/research/:id', getResearchTag);
router.get('/animals/:id', getAniTaggings);
router.post('/', newTagging);

module.exports = router;
