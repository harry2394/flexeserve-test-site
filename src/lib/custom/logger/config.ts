import P, * as Pino from "pino";
import app from "../../../../appConfig";
import { prettyOptions } from "./pretty-config";

export const serverConfig: P.LoggerOptions = {
    name: app.appName,
    level: "trace",
    timestamp: Pino.stdTimeFunctions.isoTime,
    prettyPrint: prettyOptions,
    formatters: {
        level: label => {
            return { level: label };
        },
    },
};
