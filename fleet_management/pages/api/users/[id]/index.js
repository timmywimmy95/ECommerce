import pool from '../../db/index';

export default async function handler(req, res) {
  let id = parseInt(req.query.id);
  const { name, email } = req.query;

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
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      res
        .status(200)
        .json({ message: `Successfully added ${name} and ${email}` });
    } catch (err) {
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
    try {
      const data = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id]
      );
      res
        .status(200)
        .json({ message: `Successfully updated ${name} and ${email}` });
    } catch (err) {
      res.status(500).json({ error: 'failed to update data' });
    }
  }
}
