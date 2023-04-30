import pool from '../../db/index';

//api/people
export default async function handler(req, res) {
  let method = req.method;
  let { veh_id } = req.query;

  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM vehicles WHERE id = $1', [
        veh_id,
      ]);
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
}
