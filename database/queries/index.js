const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/unit_3_exam');

module.exports = { db };
