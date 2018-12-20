const { db } = require('./index.js');

const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all species',
        body: body
      });
    }).catch(err => next(err));
};

const getSingleSpecies = (req, res, next) => {
  let specieID = Number(req.params.id);
  db.one('SELECT * FROM species WHERE id = $1', [specieID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got specie #${specieID}`,
        body: body
      })
    }).catch(err => next(err));
};

const addSpecie = (req, res, next) => {
  db.none('INSERT INTO species (name, is_mammal) VALUES (${name}, ${is_mammal})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'Success',
      message: 'Added new specie'
    });
  }).catch(err => next(err));
};

module.exports = {
                  getAllSpecies,
                  getSingleSpecies,
                  addSpecie
                };
