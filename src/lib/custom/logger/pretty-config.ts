const dev = process.env.NODE_ENV === "development";

export const prettyOptions = dev
    ? {
          messageKey: "msg",
          colorize: true,
          levelFirst: true,
          ignore: "pid,hostname",
          translateTime: " m/d/yy - HH:MM:ss ",
      }
    : false;
