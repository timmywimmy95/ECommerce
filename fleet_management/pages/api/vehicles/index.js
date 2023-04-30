import pool from '../db/index';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM vehicles');
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to insert data' });
    }
  }
}
