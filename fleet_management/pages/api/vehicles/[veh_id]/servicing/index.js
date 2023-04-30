import pool from '../../../db/index';

export default async function handler(req, res) {
  let method = req.method;
  let { veh_id, servicedate, description, cost } = req.query;

  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        'SELECT * FROM servicing WHERE veh_id = $1',
        [veh_id]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }

  if (req.method === 'POST') {
    try {
      const data = await pool.query(
        'INSERT INTO servicing (servicedate, description, cost, veh_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [servicedate, description, cost, veh_id]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to insert data' });
    }
  }
}
