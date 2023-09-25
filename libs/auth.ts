import { NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";



export const authOptions : NextAuthOptions = {
        adapter: PrismaAdapter(prisma),
        providers: [
          GoogleProvider({
              clientId: process.env.GOOGLE_ID! as string,
              clientSecret: process.env.GOOGLE_SECRET! as string,
          }),
          GithubProvider({
            clientId: process.env.GITHUB_ID! as string,
            clientSecret: process.env.GITHUB_SECRET! as string,
          }),
        ],
      }


export const getAuthSession = () => getServerSession(authOptions)