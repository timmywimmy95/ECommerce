import pool from '../../../db/index';

export default async function handler(req, res) {
  let method = req.method;
  let { make, model, year, id } = req.query;

  //person/[id]/vehicles

  // GET All Vehicles from ONE User
  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        'SELECT * FROM vehicles WHERE user_id = $1',
        [id]
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: "failed to load person's vehicles" });
    }
  }
  // Post a vehicle for ONE user
  if (req.method === 'POST') {
    try {
      const data = await pool.query(
        'INSERT INTO vehicles (make, model, year, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [make, model, year, id]
      );
      res.status(200).json({
        message: `Successfully added ${make},  ${model} and ${year} into ${id}`,
      });
    } catch (err) {
      res.status(500).json({ error: 'failed to insert data' });
    }
    // try {
    //   res.status(200).json({ message: `${make} ${model} ${year} ${id}` });
    // } catch (error) {
    //   res.status(500).json({ error: 'failed to insert data' });
    // }
  }
  if (req.method === 'DELETE') {
    try {
      const data = await pool.query('DELETE FROM vehicles WHERE user_id = $1', [
        id,
      ]);
      res.status(200).json({ message: `Successfully deleted user ${id}` });
    } catch (err) {
      res.status(500).json({ error: 'failed to delete data' });
    }
  }
}
