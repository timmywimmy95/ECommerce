import pool from '../db/index';

//api/people
export default async function handler(req, res) {
  let method = req.method;

  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        'SELECT * FROM vehicles v JOIN servicing s ON (v.id = s.veh_id)'
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
  if (req.method === 'POST') {
    let { servicedate, description, cost, license_plate, mileage, status } =
      req.body;
    try {
      const vehQuery = await pool.query(
        'SELECT id FROM vehicles WHERE license_plate = $1',
        [license_plate]
      );

      const vehicleId = vehQuery.rows[0].id;

      const data = await pool.query(
        'INSERT INTO servicing (servicedate, description, cost, mileage, license_plate, status, veh_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [
          servicedate,
          description,
          cost,
          mileage,
          license_plate,
          status,
          vehicleId,
        ]
      );
      res.status(200).redirect('http://localhost:3000/servicing/');
    } catch (err) {
      console.log(servicedate, mileage, cost, description, license_plate);
      res.status(500).json({ error: err });
    }
  }
}
