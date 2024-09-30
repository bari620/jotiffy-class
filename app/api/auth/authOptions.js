import GithubProvider from "next-auth/providers/github";
export const authOptions = {
    providers: [
        GithubProvider({
            clientid: process.env.GITHUB_CLIENT_ID,
            clientid: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    pages: ({
        signIn: '/signin'
    })
};
