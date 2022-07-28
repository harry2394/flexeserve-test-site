/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
// import SocialLogo from "social-logos";
// import { HeroIcon } from "@Components/HeroIcon";
import { AuthenticationProvider } from "@Definitions/Types";
import SocialIcon from "@Components/TailwindUI/ApplicationUI/Elements/SocialIcon";

interface OAuthProps {
    providers: AuthenticationProvider[];
    onSignInClicked(provider: string, payload: Record<string, string>): void;
}

const OAuthForm: React.FunctionComponent<OAuthProps> = ({ providers, onSignInClicked }): JSX.Element => {
    const SignInClicked = (provider: string, payload: Record<string, string>) => {
        onSignInClicked(provider, payload);
    };

    if (!providers || providers.length === 0) return <div />;
    return (
        <div className="mt-6">
            <>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Sign in using</span>
                    </div>
                </div>
                <div className="my-3 grid grid-cols-1 gap-3">
                    {providers.map((provider: AuthenticationProvider) => (
                        <button key={provider.id} type="button" onClick={() => SignInClicked(provider.id, {})}>
                            <div>
                                <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <SocialIcon socialNetwork={provider.id} size={18} />
                                    <div className="px-2 bg-white text-gray-500">{provider.name}</div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </>
        </div>
    );
};

export default OAuthForm;
