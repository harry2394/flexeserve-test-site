/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useRouter } from "next/router";
import { AuthenticationProvider } from "@Definitions/Types";
import EmailForm from "../EmailForm";
import OAuthForm from "../OAuthForm";
import CredentialsEmailPasswordForm from "../CredentialsEmailPasswordForm";

interface SigninSimpleProps {
    providers: Record<string, AuthenticationProvider>;
    onSignInClicked(provider: string, payload: Record<string, string>): void;
}

const SigninSimple: React.FunctionComponent<SigninSimpleProps> = ({ providers, onSignInClicked }): JSX.Element => {
    const providersArray = providers ? Object.values(providers) : [];
    const emailProvider = providersArray.find(provider => provider.type === "email");
    // Only email/password credentials provider supported right now - will need enhancing for others
    const emailPasswordProvider = providersArray.find(provider => provider.type === "credentials");
    const router = useRouter();

    const SignInClicked = (provider: string, payload: Record<string, string>) => {
        const callbackUrl = Array.isArray(router.query.callbackUrl)
            ? router.query.callbackUrl[0]
            : router.query.callbackUrl;
        onSignInClicked(provider, { ...payload, callbackUrl });
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="/static/images/logo_light_narrow.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    {emailProvider && (
                        <EmailForm
                            onSignInClicked={(provider: string, payload: Record<string, string>) =>
                                SignInClicked("email", payload)
                            }
                        />
                    )}
                    {emailPasswordProvider && (
                        <CredentialsEmailPasswordForm
                            provider={emailPasswordProvider}
                            onSignInClicked={(provider: string, payload: Record<string, string>) =>
                                SignInClicked("email-password-auth", payload)
                            }
                        />
                    )}
                    <OAuthForm
                        providers={providersArray.filter(provider => provider.type === "oauth")}
                        onSignInClicked={(provider: string, payload: Record<string, string>) =>
                            SignInClicked(provider, payload)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export { SigninSimple };
