import * as Pino from "pino";
import { CustomLogger } from "global";
import { serverConfig } from "./config";

/**
 * @see https://getpino.io/#/
 */

const log = Pino.default(serverConfig);

const logFn = (level: string, message: string, obj: any, args?: any) => {
    let data = obj || {};

    if (typeof data === "string") data = { data };

    return log[level](data, message, args || []);
};

/**
 * ### Customised logger
 * Use this logger instead of console.*();
 * @example
    logger.info(message, obj?, args?)
    logger.warn(message, err?, args?)
    logger.error(message, obj?, args?)
    logger.fatal(message, obj?, args?)
    logger.debug(message, obj?, args?)
    logger.trace(message, obj?, args?)
    logger.pino() // Read link...
 * @link https://getpino.io
 */
export const logger: CustomLogger = {
    pino: () => log,
    info: (message, obj?, args?) => logFn("info", message, obj, args),
    warn: (message, obj?, args?) => logFn("warn", message, obj, args),
    error: (message, error?, args?) => logFn("error", message, error, args),
    fatal: (message, obj?, args?) => logFn("fatal", message, obj, args),
    debug: (message, obj?, args?) => logFn("debug", message, obj, args),
    trace: (message, obj?, args?) => logFn("trace", message, obj, args),
};
