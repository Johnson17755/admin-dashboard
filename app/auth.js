import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  if (!credentials?.username || !credentials?.password) {
    throw new Error("Please provide both username and password");
  }

  try {
    await connectToDB(); // Make sure to await the connection
    
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials!");
    }

    // Convert MongoDB document to a plain JavaScript object
    // and remove sensitive data
    const userObject = user.toObject();
    delete userObject.password;
    
    return userObject;
  } catch (err) {
    console.error("Login error:", err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.error("Authorization error:", err);
          return null; // Return null instead of the error
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.id = user._id.toString();
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.id = token.id;
      }
      return session;
    }
  },
  debug: process.env.NODE_ENV === 'development',
});