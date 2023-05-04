import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

import pool from '../db/index';
import { compare } from 'bcryptjs';

const connection = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'learn',
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',

      async authorize(credentials, req) {
        //Check for user existence
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          // 'SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)',
          [credentials.email]
        );
        // If user does not exist, throw error
        if (result.rowCount === 0) {
          throw new Error(`No user found with email ${credentials.email}`);
        }
        // when user is found, compare the typed in password (credentials.password) with database password
        const checkPassword = await compare(
          credentials.password,
          result.rows[0].password
        );
        // check for incorrect password
        if (!checkPassword || result.rows[0].email !== credentials.email) {
          throw new Error('Username or password does not match');
        }
        console.log(result.rowCount);
        return result.rows[0];
      },
    }),

    // ...add more providers here
  ],
  adapter: TypeORMLegacyAdapter(connection),
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      if (user?.role) token.role = user.role;
      if (user?.username) token.username = user.username;

      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      if (token?.role) session.user.role = token.role;
      if (token?.username) session.user.username = token.username;
      return session;
    },
  },

  secret: process.env.RAND_64,
};

export default NextAuth(authOptions);
