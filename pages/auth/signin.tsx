import React from "react";
import { useRouter } from "next/router";
import { providers as nextAuthProviders, signIn } from "next-auth/client";
import { AuthenticationProvider, NorthLinkPage } from "@Definitions/Types";
import { Alert } from "@Components/TailwindUI/ApplicationUI/Feedback/Alert";
import { SigninSimple } from "@Components/TailwindUI/ApplicationUI/Forms/Signin/Simple";

interface Props {
    providers: Record<string, AuthenticationProvider>;
}

const SignIn: NorthLinkPage = (props: Props) => {
    const { providers } = props;
    const router = useRouter();
    const onSignInClicked = (provider: string, payload: Record<string, string>) => {
        signIn(provider, payload);
    };

    const errorCode = Array.isArray(router.query.error) ? router.query.error[0] : router.query.error;

    const errorStringMap: Record<string, string> = {
        Signin: "There was a problem signing in by email",
        OAuthSignin: "There was a problem signing in using the authentication provider",
        OAuthCallback: "There was a problem during the authentication callback",
        OAuthCreateAccount: "There was a problem creating the authentication account",
        EmailCreateAccount: "There was a problem creating the email account",
        Callback: "There was a problem during the callback",
        OAuthAccountNotLinked: "This authentication account could not be linked",
        EmailSignin: "There was a problem signing in by email",
        CredentialsSignin: "There was a problem with your credentials",
    };

    const getErrorString = (errorCodeParam: string) => {
        let errorString = errorStringMap[errorCodeParam];
        if (!errorString) {
            errorString = errorCodeParam;
        }
        return errorString;
    };

    return (
        <>
            <div>
                {errorCode && (
                    <div className="mt-8">
                        <Alert theme="red" accentBorder header="Error" iconName="XCircle">
                            <div>{getErrorString(errorCode)}</div>
                        </Alert>
                    </div>
                )}
            </div>
            <SigninSimple
                providers={providers}
                onSignInClicked={(provider, payload) => onSignInClicked(provider, payload)}
            />
        </>
    );
};

SignIn.getInitialProps = async () => {
    return {
        providers: await nextAuthProviders(),
        pageTitle: "Sign In",
    };
};

export default SignIn;
