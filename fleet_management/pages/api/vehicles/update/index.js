import pool from '../../db/index';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await pool.query(
        `SELECT COUNT(*) AS total, SUM(CASE WHEN status = 'Upcoming' THEN 1 ELSE 0 END) AS upcoming, SUM(CASE WHEN status = 'Overdue' THEN 1 ELSE 0 END) AS overdue,SUM(CASE WHEN status = 'Up to Date' THEN 1 ELSE 0 END) AS uptodate, SUM(CASE WHEN status IS NULL THEN 1 ELSE 0 END) AS unknown FROM vehicles`
      );
      res.status(200).json(data.rows);
    } catch (err) {
      res.status(500).json({ error: 'failed to get data' });
    }
  }
}
