import pool from '../../db/index';
import { getSession } from 'next-auth/react';

//api/people
export default async function handler(req, res) {
  const { role } = req.query;
  console.log(role, 'from veh api');
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
    if (role && role === 'admin') {
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
    } else {
      res.status(403).json({ error: 'Unauthorized' });
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
