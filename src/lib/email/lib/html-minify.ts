import { crush } from "html-crush";

/**
 * ### Minifies HTML/CSS: valid or broken, pure or mixed with other languages
 * @see [ReadMore](https://www.npmjs.com/package/html-crush)
 */
export const minifyHtml = async (html: string) => crush(html).result;
