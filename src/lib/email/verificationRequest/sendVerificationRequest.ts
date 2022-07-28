import nodemailer from "nodemailer";
import sendVerificationRequestHTML from "./verificationRequestHTML";

// Email text body – fallback for email clients that don't render HTML
const text = (url: string, site: string) => `Sign in to ${site}\n${url}\n\n`;

const sendVerificationRequest = (
    identifier: string,
    url: string,
    // token,
    baseUrl: string,
    provider: any
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const { server, from } = provider;
        // Strip protocol from URL and use domain as site name
        const site = baseUrl.replace(/^https?:\/\//, "");

        nodemailer.createTransport(server).sendMail(
            {
                to: identifier,
                from,
                subject: `Sign in to ${site}`,
                text: text(url, site),
                html: sendVerificationRequestHTML({ url, site, identifier }),
            },
            error => {
                if (error) {
                    return reject(new Error(error.message));
                }
                return resolve();
            }
        );
    });
};

export default sendVerificationRequest;
