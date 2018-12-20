const { db } = require('./index.js');

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all animals',
        body: body
      });
    }).catch(err => next(err));
};

const getOneAminal = (req, res, next) => {
  let aniID = Number(req.params.id);
  db.one('SELECT * FROM animals WHERE id = $1', [aniID])
    .then(body => {
      res.status(200)
    .json({
      status: 'Success',
      message: `Got animal #${aniID}`,
      body: body
    });
  }).catch(err => next(err))
};

const addAminal = (req, res, next) => {
  db.none('INSERT INTO animals (species_id, nickname)' +
          'VALUES (${species_id}, ${nickname})', req.body)
          .then(() => {
            res.status(200)
            .json({
              status: 'Success',
              message: 'Added new aminal'
            });
          }).catch(err => next(err));
};

const updateAminal = (req, res, next) => {
  let aniID = Number(req.params.id);
  let queryStr = 'UPDATE animals SET';
  let specieID = Number(req.body.species_id);
  let nick = req.body.nickname;

  if(specieID && nick) {
    queryStr += ` species_id = '${specieID}', nickname = '${nick}'`;
  } else {
    queryStr += ` nickname = '${nick}'`
  }

  queryStr += `WHERE id = ${aniID}`;

  db.none(queryStr)
    .then(() => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Updated aminal #${aniID}`
      });
    }).catch(err => next(err));
};

const killAminal = (req, res, next) => {
  let aniID = Number(req.params.id);
  db.result('DELETE FROM animals WHERE id = $1', [aniID])
    .then(result => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Killed aminal #${aniID}. Poor thing...`,
        result: result
      });
    }).catch(err => next(err));
};

module.exports = {
                  getAllAnimals,
                  getOneAminal,
                  addAminal,
                  updateAminal,
                  killAminal
                  };
