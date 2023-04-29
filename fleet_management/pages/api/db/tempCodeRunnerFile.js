const { Pool, Client } = require('pg');

const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

client
  .connect()
  .then(() => {
    console.log('connected');
  })
  .catch((e) => console.log(e))
  .finally(() => client.end());