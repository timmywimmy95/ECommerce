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
      res.status(200).json(data.rows[0]);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
  if (req.method === 'DELETE') {
    try {
      const data = await pool.query('DELETE FROM vehicles WHERE id = $1', [
        veh_id,
      ]);
      res.status(200).json({
        message: `Successfully deleted vehicle ${veh_id}`,
      });
    } catch (err) {
      res.status(500).json({ error: 'failed to delete data' });
    }
  }
  if (req.method === 'PUT') {
    const { type, make, model, year, coe, road_tax, license_plate } = req.body;
    try {
      const data = await pool.query(
        'UPDATE vehicles SET type = $1, make = $2, model = $3, year = $4, coe = $5, road_tax = $6, license_plate = $7 WHERE id = $8',
        [type, make, model, year, coe, road_tax, license_plate, veh_id]
      );

      res.status(200).json({
        message: `Successfully updated ${license_plate}`,
      });
    } catch (err) {
      console.log(
        type,
        make,
        model,
        year,
        coe,
        road_tax,
        license_plate,
        veh_id
      );
      res.status(500).json({ error: 'failed to update data' });
    }
  }
}
