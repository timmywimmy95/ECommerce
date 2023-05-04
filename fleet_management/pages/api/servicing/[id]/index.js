import pool from '../../db/index';

//api/people
export default async function handler(req, res) {
  let method = req.method;
  let id = parseInt(req.query.id);
  if (req.method === 'PUT') {
    const { license_plate, servicedate, description, mileage, cost } = req.body;
    try {
      const data = await pool.query(
        'UPDATE servicing SET license_plate = $1, servicedate = $2, description = $3, mileage = $4, cost = $5 WHERE id = $6',
        [license_plate, servicedate, description, mileage, cost, id]
      );

      res.status(200).json({
        message: `Successfully updated ${license_plate} and ${description}`,
      });
    } catch (err) {
      console.log(license_plate, servicedate, description, mileage, cost, id);
      res.status(500).json({ error: 'failed to update data' });
    }
  }
  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM servicing WHERE id = $1', [
        id,
      ]);
      res.status(200).json(data.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
