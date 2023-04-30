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
        pool.catch((error) => {
          error: 'Connection failed';
        });
        //Check for user existence
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [credentials.email]
        );
        // If user does not exist, throw error
        if (!result) {
          throw new Error(`No user found with email ${credentials.email}`);
        }
        // when user is found, compare the typed in password (credentials.password) with database password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        // check for incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error('Username or password does not match');
        }
        return result;
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
      if (user?._id) token._id = user._id;
      if (user?.role) token.role = user.role;
      if (user?.username) token.username = user.username;

      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.role) session.user.role = token.role;
      if (token?.username) session.user.username = token.username;
      return session;
    },
  },

  secret: process.env.RAND_64,
};

export default NextAuth(authOptions);
