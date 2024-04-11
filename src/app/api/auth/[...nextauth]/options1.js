import {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
    secret: process.env.NEXT_AUTH_SECRET,

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET 
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET

        }),
        
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username:", type: "text" , placeholder: "Enter username"},
                password: { label: "Password:", type: "password", placeholder: "Enter Password" }
            },
            async authorize(credentials) {
                const user = { id: 1, name: "Ashutosh", password: "123"}

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }else{
                    return null
                }
            }
        })
    ],
}
