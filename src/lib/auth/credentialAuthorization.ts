/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authorize = (credentials: any) => {
    console.log("Authorize credentials needs to be implemented!");

    // LOOK UP USER FROM CREDENTIALS SUPPLIED
    const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

    if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return Promise.resolve(user);
    }
    // If you return null or false then the credentials will be rejected
    return Promise.resolve(null);
    // You can also Reject this callback with an Error or with a URL:
    // return Promise.reject(new Error('error message')) // Redirect to error page
    // return Promise.reject('/path/to/redirect')        // Redirect to a URL
};

export default authorize;
