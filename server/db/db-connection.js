const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DB_URI
  });

  module.exports = db;

  // const pgp = require('pg-promise');
  // const db = pgp('postgres://localhost:5432/techtonica1')

  // module.export = db;