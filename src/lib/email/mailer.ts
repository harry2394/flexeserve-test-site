import nodemailer from "nodemailer";
import { minifyHtml } from "./lib/html-minify";
import { removeUnusedCss } from "./lib/remove-unused-css";
import { htmlToPlainText } from "./lib/html-to-plain-text";

export const mailer = async (nodeMailerOptions: NodeMailerOptions): Promise<void> => {
    const { rawHtml, subject, to } = nodeMailerOptions;

    const text = await htmlToPlainText(rawHtml);

    const cssCleaned = await removeUnusedCss(rawHtml);

    const html = await minifyHtml(cssCleaned);

    return new Promise((resolve, reject) => {
        const emailServer = process.env.EMAIL_SERVER;
        const from = process.env.EMAIL_FROM;

        nodemailer.createTransport(emailServer).sendMail(
            {
                to,
                from,
                subject,
                text,
                html,
            },
            error => {
                if (error) reject(new Error(error.message));
                else resolve();
            }
        );
    });
};
