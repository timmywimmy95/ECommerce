import pool from '../../../../../../db/index';

export default async function handler(req, res) {
  let method = req.method;
  let { veh_id, svc_id } = req.query;

  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        'SELECT * FROM servicing WHERE veh_id = $1 AND id = $2',
        [veh_id, svc_id]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
}
