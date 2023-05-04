import pool from '../../db/index';

export default async function handler(req, res) {
  let id = parseInt(req.query.id);
  const { username, email, first_name, last_name, role } = req.body;

  if (req.method === 'GET') {
    try {
      const data = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  }
  if (req.method === 'POST') {
    try {
      const data = await pool.query(
        'INSERT INTO users (first_name, last_name, email, username, role) VALUES ($1, $2, $3, $4, $5) WHERE id=$6',
        [first_name, last_name, email, username, role, id]
      );
      res
        .status(200)
        .json({ message: `Successfully added ${name} and ${email}` });
    } catch (err) {
      console.log(first_name, last_name, email, username, role, id);
      res.status(500).json({ error: 'failed to insert data' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const data = await pool.query('DELETE FROM users WHERE id = $1', [id]);
      res.status(200).json({ message: `Successfully deleted user ${id}` });
    } catch (err) {
      res.status(500).json({ error: 'failed to delete data' });
    }
  }

  if (req.method === 'PUT') {
    const { username, email, first_name, last_name, role } = req.body;
    try {
      const data = await pool.query(
        'UPDATE users SET first_name = $1, last_name = $2, username = $3, email = $4, role = $5 WHERE id = $6',
        [first_name, last_name, username, email, role, id]
      );

      res
        .status(200)
        .json({ message: `Successfully updated ${first_name} and ${email}` });
    } catch (err) {
      console.log(first_name, last_name, username, email, role, id);
      res.status(500).json({ error: 'failed to update data' });
    }
  }
}
