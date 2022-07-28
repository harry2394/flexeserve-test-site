import { comb } from "email-comb";

/**
 * ## Removes all unused css from styles and from inline tags
 * @see [ReadMore](https://www.npmjs.com/package/email-comb)
 */
export const removeUnusedCss = async (html: string): Promise<string> => comb(html).result;
