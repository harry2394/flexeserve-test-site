const devProxy: { [key: string]: {} } = {
    "/remote-api": {
        target: "https://place.remoteapiURL.here",
        pathRewrite: { "^/remote-api": "" },
        changeOrigin: true,
    },
};

export default devProxy;
