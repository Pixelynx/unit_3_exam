const { db } = require('./index.js');

const getResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Got all researchers',
        body: body
      });
    }).catch(err => next(err));

};

const getOneResearcher = (req, res, next) => {
  let rscherID = Number(req.params.id);
  db.one('SELECT * FROM researchers WHERE id = $1', rscherID)
    .then(body => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Got researcher #${rscherID}`,
        body: body
      });
    }).catch(err => next(err));
};

const addResearcher = (req, res, next) => {
  db.none('INSERT INTO researchers (name, job_title)' +
          'VALUES (${name}, ${job_title})', req.body)
    .then(() => {
      res.status(200)
      .json({
        status: 'Success',
        message: 'Added a new researcher'
      });
    }).catch(err => next(err));
};

const updateResearcher = (req, res, next) => {
  let rscherID = Number(req.params.id);
  let queryStr = 'UPDATE researchers SET';
  let name_ = req.body.name;
  let jobTitle = req.body.job_title;

  if(name_ && jobTitle) {
    queryStr += ` name = '${name_}', job_title = '${jobTitle}'`;
  } else if (name_) {
    queryStr += ` name = '${name_}'`;
  } else {
    queryStr += ` job_title = '${jobTitle}'`;
  };

  queryStr +=  `WHERE id = ${rscherID}`;

  db.none(queryStr)
    .then(() => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Updated researcher #${rscherID}`
      });
    }).catch(err => next(err));
};

const deleteRes = (req, res, next) => {
  let rscherID = Number(req.params.id);
  db.result('DELETE FROM researchers WHERE id = $1', [rscherID])
    .then(result => {
      res.status(200)
      .json({
        status: 'Success',
        message: `Removed researcher #${rscherID}`,
        result: result
      });
    }).catch(err => next(err));
};

module.exports = {
                  getResearchers,
                  getOneResearcher,
                  addResearcher,
                  updateResearcher,
                  deleteRes
                  };
