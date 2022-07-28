import React from "react";
import { SocialLink, IFooterParams, StaticPageThemes } from "@Definitions/UI/Types";
import { NavigationLink } from "@Definitions/Types";
import SocialIcon from "@Components/TailwindUI/ApplicationUI/Elements/SocialIcon";
import { classNames } from "./classNames";

interface SocialLinkProps extends SocialLink {
    theme: StaticPageThemes;
}

interface NavigationLinkProps extends NavigationLink {
    theme: StaticPageThemes;
}

const SocialLinkItem: React.FunctionComponent<SocialLinkProps> = ({ theme, socialNetwork, link }): JSX.Element => {
    return (
        <a href={link} className={classNames[theme].socialLink}>
            <span className="sr-only">{socialNetwork}</span>
            <SocialIcon socialNetwork={socialNetwork} size={18} />
        </a>
    );
};

const NavigationLinkItem: React.FunctionComponent<NavigationLinkProps> = ({ theme, title, link }): JSX.Element => {
    return (
        <div className="px-5 py-2">
            <a href={link} className={`text-base ${classNames[theme].navigationLink}`}>
                {title}
            </a>
        </div>
    );
};

const FooterSimpleCentered: React.FunctionComponent<IFooterParams> = ({
    footerTheme,
    footerLinks,
    footerSocialLinks,
    footerCopyrightMessage,
}): JSX.Element => {
    return (
        <footer className={classNames[footerTheme].backgroundDiv}>
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {footerLinks &&
                        footerLinks.map((navigationLink: NavigationLink) => (
                            <NavigationLinkItem key={navigationLink.title} theme={footerTheme} {...navigationLink} />
                        ))}
                </nav>

                <div className="mt-8 flex justify-center space-x-6">
                    {footerSocialLinks &&
                        footerSocialLinks.map((socialLink: SocialLink) => (
                            <SocialLinkItem key={socialLink.socialNetwork} theme={footerTheme} {...socialLink} />
                        ))}
                </div>
                {footerCopyrightMessage && (
                    <p className={`mt-8 text-center text-base ${classNames[footerTheme].copyrightMessage}`}>
                        {footerCopyrightMessage}
                    </p>
                )}
            </div>
        </footer>
    );
};

export { FooterSimpleCentered };
