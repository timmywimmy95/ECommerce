import { hash } from 'bcryptjs';
import pool from '../db/index';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: 'Do not have form data' });

    const { username, email, password } = req.body;
    // Check for duplicate users
    const checkexisting = await pool.query(
      'SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)',
      [email]
    );

    if (checkexisting.rows[0].exists)
      return res.status(422).json({ message: 'User already exists' });

    async function hashPassword(password) {
      const saltRounds = 12;

      const hashedPassword = await new Promise((resolve, reject) => {
        hash(password, saltRounds, function (err, hash) {
          if (err) reject(err);
          resolve(hash);
        });
      });

      return hashedPassword;
    }

    try {
      let hashedPassword = await hashPassword(password);
      const data = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
      );
      res.status(201).json({
        message: `Successfully added ${username} and ${email}`,
        user: data.rows,
      });
    } catch (err) {
      res.status(500).json({ error: 'failed to add user' });
    }
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid. Only POST method accepted.' });
  }
}
