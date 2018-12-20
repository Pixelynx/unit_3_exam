const { db } = require('./index.js');

const getSightings = (req, res, next) => {
  db.any('SElECT * FROM sightings')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all sightings',
        body: body
      });
    }).catch(err => next(err));
};

const getSpecieSighting = (req, res, next) => {
  let specieID = Number(req.params.id);
  db.any('SELECT * FROM sightings WHERE species_id = $1', [specieID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got all sighting for specie #${specieID}`,
        body: body
      });
    }).catch(err => next(err))
};

const getResSightings = (req, res, next) => {
  let resID = Number(req.params.id);
  db.any('SELECT * FROM sightings WHERE researcher_id = $1', [resID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got all sightings by researcher #${resID}`,
        body: body
      });
    }).catch(err => next(err));
};

const getHabSightings = (req, res, next) => {
  let habID = Number(req.params.id);
  db.any('SELECT * FROM sightings WHERE habitat_id = $1', [habID])
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got all sightings in habitat #${habID}`,
        body: body
      });
    }).catch(err => next(err));
};

const addSighting = (req, res, next) => {
  db.none('INSERT INTO sightings (researcher_id, species_id, habitat_id)' +
          'VALUES (${researcher_id}, ${species_id}, ${habitat_id})', req.body)
          .then(() => {
            res.status(200)
            .json({
              status: 'Success',
              message: 'Added a new sighting',
            });
          }).catch(err => next(err));
};

const deleteSighting = (req, res, next) => {
  let sightID = Number(req.params.id);
  db.result('DELETE FROM sightings WHERE id = $1', [sightID])
    .then(result => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Deleted sighting #${sightID}`,
        result: result
      });
    }).catch(err => next(err));
};

module.exports = {
                  getSightings,
                  getSpecieSighting,
                  getResSightings,
                  getHabSightings,
                  addSighting,
                  deleteSighting
                  };
