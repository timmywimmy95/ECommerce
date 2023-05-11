import pool from '../../../../db/index';

export default async function handler(req, res) {
  let method = req.method;
  let { veh_id, svc_id, servicedate, description, cost, role } = req.query;

  console.log(role, 'from svc api');

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

  if (req.method === 'PUT') {
    try {
      const data = await pool.query(
        'UPDATE servicing SET servicedate = $1, description = $2, cost = $3 WHERE veh_id = $4 AND id = $5',
        [servicedate, description, cost, veh_id, svc_id]
      );
      res.status(200).json({
        message: `Successfully updated servicing ${svc_id} for ${veh_id}`,
      });
    } catch (err) {
      res.status(500).json({ error: 'failed to update data' });
    }
  }

  if (req.method === 'DELETE') {
    if (role && role === 'admin') {
      try {
        const data = await pool.query(
          'DELETE FROM servicing WHERE veh_id = $1 AND id = $2',
          [veh_id, svc_id]
        );
        res.status(200).json({
          message: `Successfully deleted servicing ${svc_id} for vehicle ${veh_id}`,
        });
      } catch (err) {
        res.status(500).json({ error: 'failed to delete data' });
      }
    } else {
      res.status(403).json({ error: 'Unauthorized' });
    }
  }
}
