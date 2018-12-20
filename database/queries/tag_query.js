const { db } = require('./index.js');

const getAllTags = (req, res, next) => {
  db.any('SELECT * FROM taggings')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all taggings',
        body: body
      });
    }).catch(err => next(err));
};

const getOneTag = (req, res, next) => {
  let tagID = Number(req.params.id);
  db.one('SELECT * FROM taggings WHERE id = $1', [tagID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got tag #${tagID}`,
        body: body
      });
    }).catch(err => next(err));
};

const getResearchTag = (req, res, next) => {
  let resID = Number(req.params.id);
  db.any('SELECT * FROM taggings WHERE researcher_id = $1', [resID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got taggings performed by researcher #${resID}`,
        body: body
      });
    }).catch(err => next(err));
};

const getAniTaggings = (req, res, next) => {
  let aniID = Number(req.params.id);
  db.any('SELECT * FROM taggings WHERE animal_id = $1', [aniID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got taggings for aminal #${aniID}`,
        body: body
      });
    }).catch(err => next(err));
};

const newTagging = (req, res, next) => {
  db.none('INSERT INTO taggings (animal_id, researcher_id)' +
          'VALUES(${animal_id}, ${researcher_id})', req.body)
          .then(() => {
            res.status(200)
            .json({
              status: 'Success',
              message: 'Recorded new tagging'
            });
          }).catch(err => next(err));
};

module.exports = {
                  getAllTags,
                  getOneTag,
                  getResearchTag,
                  getAniTaggings,
                  newTagging
                  };
