import pool from '../db/index';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.query;
    try {
      const data = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to insert data' });
    }
  }

  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM users');
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
}
