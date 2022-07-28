import NextAuth, { User } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";
import sendVerificationRequest from "@Lib/email/verificationRequest/sendVerificationRequest";
import { getRolesForUser } from "@Lib/auth/getRolesForUser";
import { isUserAllowedToSignIn } from "@Lib/auth/isUserAllowedToSignIn";
import authorize from "@Lib/auth/credentialAuthorization";
import { GenericObject } from "next-auth/_utils";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
            sendVerificationRequest: params => {
                // eslint-disable-next-line no-console
                console.log("sendVerificationRequest", params.identifier, params.url, params.baseUrl, params.provider);
                return sendVerificationRequest(params.identifier, params.url, params.baseUrl, params.provider);
            },
        }),
        Providers.Credentials({
            id: "email-password-auth",
            name: "email and password",
            authorize: async credentials => {
                return authorize(credentials);
            },
            credentials: {
                emailAddress: { label: "Email address", type: "text" },
                password: { label: "Password", type: "password" },
            },
        }),
        Providers.Apple({
            clientId: process.env.APPLE_ID || "Apple appleId Missing",
            clientSecret: {
                appleId: process.env.APPLE_ID || "Apple teamId Missing",
                teamId: process.env.APPLE_TEAM_ID || "Apple teamId Missing",
                privateKey: process.env.APPLE_PRIVATE_KEY || "Apple privateKey Missing",
                keyId: process.env.APPLE_KEY_ID || "Apple keyId Missing",
            },
        }),
        Providers.Auth0({
            clientId: process.env.AUTH0_ID || "Auth0 clientId Missing",
            clientSecret: process.env.AUTH0_SECRET || "Auth0 clientSecret Missing",
            domain: process.env.AUTH0_DOMAIN || "Auth0 domain Missing",
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID || "Facebook clientId Missing",
            clientSecret: process.env.FACEBOOK_SECRET || "Facebook clientSecret Missing",
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID || "GitHub clientSecret Missing",
            clientSecret: process.env.GITHUB_SECRET || "GitHub clientSecret Missing",
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID || "Google clientSecret Missing",
            clientSecret: process.env.GOOGLE_SECRET || "Google clientSecret Missing",
        }),
        // Providers.Twitter({
        //   clientId: process.env.TWITTER_ID,
        //   clientSecret: process.env.TWITTER_SECRET,
        // }),
    ],
    // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
    // https://next-auth.js.org/configuration/databases
    //
    // Notes:
    // * You must to install an appropriate node_module for your database
    // * The Email provider requires a database (OAuth providers do not)
    database: process.env.DATABASE_URL,

    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,

    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        // updateAge: 24 * 60 * 60, // 24 hours
    },

    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        // Set to true to use encryption (default: false)
        // encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        // encode: async ({ secret, token, maxAge }) => {},
        // decode: async ({ secret, token, maxAge }) => {},
    },

    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        signIn: "/auth/signin", // Displays signin buttons
        // signOut: '/api/auth/signout', // Displays form with sign out button
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verifyRequest", // Used for check email page
        newUser: "/auth/newUser", // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // signIn: async (user, account, profile) => { return Promise.resolve(true) },
        // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
        // session: async (session, user) => { return Promise.resolve(session) },
        // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
        signIn: async (user: User, account: GenericObject, profile: GenericObject) => {
            return isUserAllowedToSignIn({ user, account, profile });
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        jwt: async (token: any, user: any, account: GenericObject, profile: GenericObject, isNewUser: any) => {
            let newToken;

            // The user argument is only passed the first time this callback is called on a new session, after the user signs in
            if (user) {
                // Add a new prop on token for user data
                newToken = {
                    ...token,
                    data: { ...user, roles: getRolesForUser(user) },
                };
            } else {
                newToken = token;
            }
            return Promise.resolve(newToken);
        },
        session: async (session: any, user: any) => {
            // Assign user data from JWT to session user
            const newSession = { ...session, user: user.data };
            return Promise.resolve(newSession);
        },
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: false,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
