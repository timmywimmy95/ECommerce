import pool from '../db/index';

//api/people
export default async function handler(req, res) {
  let method = req.method;

  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM servicing');
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
}
