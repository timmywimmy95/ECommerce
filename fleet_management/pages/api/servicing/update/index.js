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
        )
        OR NOT EXISTS (
          SELECT 1
          FROM servicing s
          WHERE s.veh_id = v.id
        );
      `);

      // Execute the second query to update the next_service_date column in the vehicles table
      await pool.query(`
        UPDATE vehicles
        SET next_service_date = CASE
          WHEN last_service IS NOT NULL THEN last_service + INTERVAL '3 MONTH'
          ELSE NULL
          END
        WHERE last_service IS NOT NULL OR next_service_date IS NOT NULL;
      `);

      await pool.query(`
        UPDATE vehicles v
        SET status = 
          CASE
            WHEN v.next_service_date <= CURRENT_DATE THEN 'Overdue'
            WHEN v.next_service_date <= (now() + INTERVAL '30 Day') THEN 'Upcoming'
            WHEN v.next_service_date IS NULL THEN NULL
            ELSE 'Up to Date'
          END
        WHERE EXISTS (
          SELECT 1
          FROM servicing s
          WHERE s.veh_id = v.id
        )
        OR NOT EXISTS (
          SELECT 1
          FROM servicing s
          WHERE s.veh_id = v.id
        );
      `);

      await pool.query(`UPDATE vehicles v
      SET total_servicing_cost = (
          SELECT SUM(cost) 
          FROM servicing s 
          WHERE s.veh_id = v.id
      );`);

      const data =
        await pool.query(`SELECT * FROM vehicles ORDER BY next_service_date ASC;
      `);

      // Send a success response to the client
      res.status(200).json(data.rows);
    }
  } catch (err) {
    // Send an error response to the client
    console.error(err);
    res.status(500).json({ message: 'Error updating dashboard data' });
  }
}
