import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/connect";
import Users from "@/models/Users";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials as { email: string, password: string };
        const user = await Users.findOne({ email }) as { password: string, _id: string, email: string, username: string } | null;
        if (user && typeof user.password === 'string' && bcrypt.compareSync(password, user.password)) {
          // Only return necessary fields for session
          return { id: user._id, email: user.email, name: user.username };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
