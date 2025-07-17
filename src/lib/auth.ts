import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Resend from "next-auth/providers/resend";

// Extend the NextAuth session and user types to include a role
declare module "next-auth" {
    interface Session {
        user: {
            role: string;
        } & User;
    }
    interface User {
        role?: string;
    }
}

// This is the NextAuth configuration object.
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Resend({
            from: "onboarding@resend.dev", //TODO: replace with your verified email
        }),
    ],
    callbacks: {
        async signIn(params) {
            // { user, account, profile, email, credentials }
            console.log(params);
            return true;
        },
    },
});
