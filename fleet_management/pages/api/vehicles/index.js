import pool from '../db/index';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM vehicles');
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to get data' });
    }
  }
  if (req.method === 'POST') {
    let { type, make, model, year, coe, road_tax, license_plate } = req.body;
    try {
      const data = await pool.query(
        'INSERT INTO vehicles (type, make, model, year, coe, road_tax, license_plate ) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [type, make, model, year, coe, road_tax, license_plate]
      );
      res.status(200).redirect('http://localhost:3000/vehicles/');
    } catch (err) {
      res.status(500).json({ error: 'failed to insert data' });
    }
  }
}
