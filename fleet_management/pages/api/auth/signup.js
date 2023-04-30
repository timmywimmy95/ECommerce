import connectMongo from '@/database/conn';
import Users from '@/model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: 'Connection Failed' }));

  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: 'Form data not found' });

    const { username, email, password } = req.body;

    //Check duplicate users
    const checkUsers = await Users.findOne({ email });
    if (checkUsers)
      return res.status(422).json({ message: 'User already exists!' });

    const createdUser = await Users.create({
      username,
      email,
      password: await hash(password, 12),
    });
    if (!createdUser) {
      return res.status(404).json({ err });
    } else {
      res.status(201).json({ status: true, user: createdUser });
    }
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid. Only POST method accepted.' });
  }
}
