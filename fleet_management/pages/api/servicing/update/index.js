import pool from '../../db/index';

//api/people
export default async function handler(req, res) {
  try {
    // Execute the first query to update the last_service column in the vehicles table
    if (req.method === 'GET') {
      await pool.query(`
        UPDATE vehicles v
        SET last_service = (
          SELECT MAX(servicedate)
          FROM servicing s
          WHERE s.veh_id = v.id
        )
        WHERE EXISTS (
          SELECT 1
          FROM servicing s
          WHERE s.veh_id = v.id
        );
      `);

      // Execute the second query to update the next_service_date column in the vehicles table
      await pool.query(`
        UPDATE vehicles
        SET next_service_date = last_service + INTERVAL '3 MONTH'
        WHERE last_service IS NOT NULL;
      `);

      const data = await pool.query(`SELECT * FROM vehicles`);

      // Send a success response to the client
      res.status(200).json(data.rows);
    }
  } catch (err) {
    // Send an error response to the client
    console.error(err);
    res.status(500).json({ message: 'Error updating dashboard data' });
  }
}
