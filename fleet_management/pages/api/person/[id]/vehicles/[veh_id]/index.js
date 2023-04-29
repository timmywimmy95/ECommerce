import pool from '../../../../db/index';

export default async function handler(req, res) {
  let method = req.method;
  let { make, model, year, id, veh_id } = req.query;

  //person/[id]/vehicles/[veh_id]

  //Get a single, particular vehicle belonging to one person

  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        'SELECT * FROM vehicles WHERE user_id = $1 AND id = $2',
        [id, veh_id]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: "failed to load person's vehicles" });
    }
  }

  if (req.method === 'PUT') {
    try {
      const data = await pool.query(
        'UPDATE vehicles SET make = $1, model = $2, year = $3 WHERE user_id = $4 AND id = $5',
        [make, model, year, id, veh_id]
      );
      res
        .status(200)
        .json({ message: `Successfully updated vehicle ${veh_id} for ${id}` });
    } catch (err) {
      res.status(500).json({ error: 'failed to update data' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const data = await pool.query(
        'DELETE FROM vehicles WHERE user_id = $1 AND id = $2',
        [id, veh_id]
      );
      res.status(200).json({
        message: `Successfully deleted user ${id}'s vehicle ${veh_id}`,
      });
    } catch (err) {
      res.status(500).json({ error: 'failed to delete data' });
    }
  }
}
