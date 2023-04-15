import { dbConnect } from "@/config/db";
import { User } from "@/models/user.model";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        dbConnect();

        const user = await User.findOne({
          email,
        });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
});

export { handler as GET, handler as POST };
