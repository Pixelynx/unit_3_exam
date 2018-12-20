const { db } = require('./index.js');

const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitat')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all habitats',
        body: body
      });
    }).catch(err => next(err));
};

const getOneHabitat = (req, res, next) => {
  let habID = Number(req.params.id);
  db.one('SELECT * FROM habitat WHERE id = $1', [habID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got habitat #${habID}`,
        body: body
      });
    }).catch(err => next(err));
};

const addNewHabitat = (req, res, next) => {
  db.none('INSERT INTO habitat (category) VALUES (${category})', req.body)
    .then(() => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Added new habitat'
      });
    }).catch(err => next(err));
};

module.exports = {
                  getAllHabitats,
                  getOneHabitat,
                  addNewHabitat
                };
