import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const nextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      const isAllowedToSignIn = true;
      if (account.provider == "google") {
        return true;
      } else {
        // Return false to display a default error message
        return profile;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};
const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
