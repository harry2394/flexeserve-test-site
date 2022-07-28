// #region Global Imports
import * as React from "react";
import { Provider as NextAuthProvider } from "next-auth/client";
import { ThemeProvider } from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { NorthLinkPage } from "@Definitions/Types";
import { Layout } from "@Components/Layout";
import appConfig from "../../appConfig";
import "tailwindcss/tailwind.css";
// #endregion Local Imports

type NorthLinkAppProps = {
    Component: NorthLinkPage;
    pageProps: any;
};

function WebApp({ Component, pageProps }: NorthLinkAppProps) {
    const PageLayout = Component.Layout ? Component.Layout : Layout;

    return (
        <AppConfigContext.Provider value={appConfig}>
            <NextAuthProvider session={pageProps.session}>
                <ThemeProvider theme={theme}>
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                </ThemeProvider>
            </NextAuthProvider>
        </AppConfigContext.Provider>
    );
}

export default WebApp;
