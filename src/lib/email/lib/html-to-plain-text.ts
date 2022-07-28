import { htmlToText } from "html-to-text";

/**
 * ## Converts html to plain txt for nodemailer fallback
 * @see [ReadMore](https://www.npmjs.com/package/html-to-text)
 */
export const htmlToPlainText = async (html: string) => htmlToText(html);
