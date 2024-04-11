import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import pg from "pg";

const db = new pg.Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
});

db.connect();

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
                username: { label: "Username:", type: "text", placeholder: "Enter username" },
                password: { label: "Password:", type: "password", placeholder: "Enter Password" }
            },
            async authorize(credentials) {
                try {
                    const query = 'SELECT roll, password FROM students WHERE roll = $1 AND password = $2';
                    const result = await db.query(query, [credentials.username, credentials.password]);

                    console.log(result);
                    if (result.rows.length > 0) {
                        const user = result.rows[0];
                        console.log(user);
                        return user;
                        
                    }
                    else {
                        return null; // Return null if no matching user found
                    }
                }
                catch (error) {
                    console.error('Error fetching user:', error);
                    return null; // Return null in case of any error
                }
            }
        })
    ],
}
