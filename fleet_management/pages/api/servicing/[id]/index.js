import pool from '../../db/index';

//api/people
export default async function handler(req, res) {
  let method = req.method;
  let id = parseInt(req.query.id);
  if (req.method === 'PUT') {
    const { license_plate, servicedate, description, mileage, cost, status } =
      req.body;
    try {
      const data = await pool.query(
        'UPDATE servicing SET license_plate = $1, servicedate = $2, description = $3, mileage = $4, cost = $5, status = $6 WHERE id = $7',
        [license_plate, servicedate, description, mileage, cost, status, id]
      );

      res.status(200).json({
        message: `Successfully updated ${license_plate} and ${description}`,
      });
    } catch (err) {
      console.log(
        license_plate,
        servicedate,
        description,
        mileage,
        cost,
        status,
        id
      );
      res.status(500).json({ error: err });
    }
  }
  if (req.method === 'GET') {
    let id = parseInt(req.query.id);
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
