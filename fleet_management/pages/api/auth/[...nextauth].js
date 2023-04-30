import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import pool from '../db/index';
import { compare } from 'bcryptjs';

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
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: 'Connection failed';
        });
        const result = await Users.findOne({
          email: credentials.email,
        });
        if (!result) {
          throw new Error('No user found with email. Please sign up!');
        }

        //bcrypt compare
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error('Username or Password does not match');
        }
        console.log(result);
        return result;
      },
    }),

    // ...add more providers here
  ],
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
