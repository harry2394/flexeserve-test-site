import P from "pino";

declare namespace Process {
    interface ProcessEnv {
        PROXY_MODE: string;
        NEXT_PUBLIC_STATIC_PATH: string;
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_API_KEY: string;
    }
}

declare namespace jest {
    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}

type LogFn = (message: string, obj?: any, args?: any[]) => void;

interface CustomLogger {
    info: LogFn;
    warn: LogFn;
    error: LogFn;
    fatal: LogFn;
    debug: LogFn;
    trace: LogFn;
    pino: () => P.Logger;
}
