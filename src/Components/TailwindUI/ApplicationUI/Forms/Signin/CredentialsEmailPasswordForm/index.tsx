/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

import { AuthenticationProvider } from "@Definitions/Types";

interface CredentialsProps {
    provider: AuthenticationProvider;
    onSignInClicked(provider: string, payload: Record<string, string>): void;
}

const CredentialsEmailPasswordForm: React.FunctionComponent<CredentialsProps> = ({
    provider,
    onSignInClicked,
}): JSX.Element => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const SignInClicked = (providerId: string, payload: Record<string, string>) => {
        onSignInClicked("email-password-auth", payload);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.keyCode === 13) {
            SignInClicked("credentials", {
                emailAddress,
                password,
            });
        }
    };

    return (
        <form
            key={provider.id}
            className="space-y-6 mt-3"
            action="#"
            method="POST"
            onKeyDown={e => onKeyDownHandler(e)}
            onSubmit={() =>
                SignInClicked("credentials", {
                    emailAddress,
                    password,
                })
            }
        >
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Sign in using email and password</span>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="emailpass-email"
                        name="email"
                        type="email"
                        value={emailAddress}
                        onChange={e => setEmailAddress(e.target.value)}
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="emailpass-password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div>
                <button
                    type="button"
                    onClick={() =>
                        SignInClicked("credentials", {
                            emailAddress,
                            password,
                        })
                    }
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default CredentialsEmailPasswordForm;
