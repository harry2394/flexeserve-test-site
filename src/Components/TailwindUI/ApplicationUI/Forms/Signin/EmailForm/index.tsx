/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

interface EmailProps {
    onSignInClicked(provider: string, payload: Record<string, string>): void;
}

const EmailForm: React.FunctionComponent<EmailProps> = ({ onSignInClicked }): JSX.Element => {
    const [emailAddress, setEmailAddress] = useState("");

    const SignInClicked = (provider: string, payload: Record<string, string>) => {
        onSignInClicked(provider, payload);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.keyCode === 13) {
            SignInClicked("email", {
                email: emailAddress,
            });
        }
    };

    return (
        <form
            className="space-y-6 mt-3"
            action="#"
            method="POST"
            onKeyDown={e => onKeyDownHandler(e)}
            onSubmit={() =>
                SignInClicked("email", {
                    email: emailAddress,
                })
            }
        >
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Sign in using email</span>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
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
                <button
                    type="button"
                    onClick={() =>
                        SignInClicked("email", {
                            email: emailAddress,
                        })
                    }
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    Email me a magic signin link
                </button>
            </div>
        </form>
    );
};

export default EmailForm;
