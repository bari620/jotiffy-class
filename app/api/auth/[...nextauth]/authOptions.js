import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const authOptions = {
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret:process.env.GITHUB_CLIENT_SECRET
        })
    ],
    pages:{
      signIn:'/signin'
    }
}