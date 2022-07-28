import React from "react";
import { SocialLink, IFooterParams } from "@Definitions/UI/Types";
import SocialIcon from "@Components/TailwindUI/ApplicationUI/Elements/SocialIcon";
import { classNames } from "./classNames";

const SocialLinkItem: React.FunctionComponent<SocialLink> = ({ socialNetwork, link }): JSX.Element => {
    return (
        <a href={link} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{socialNetwork}</span>
            <SocialIcon socialNetwork={socialNetwork} size={24} />
        </a>
    );
};

const FooterSocialLinksOnly: React.FunctionComponent<IFooterParams> = ({
    footerTheme,
    footerSocialLinks,
    footerCopyrightMessage,
}): JSX.Element => {
    return (
        <footer className={classNames[footerTheme].backgroundDiv}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {footerSocialLinks &&
                        footerSocialLinks.map((socialLink: SocialLink) => <SocialLinkItem {...socialLink} />)}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    {footerCopyrightMessage && (
                        <p className={`text-center text-base ${classNames[footerTheme].copyrightMessage}`}>
                            {footerCopyrightMessage}
                        </p>
                    )}
                </div>
            </div>
        </footer>
    );
};

export { FooterSocialLinksOnly };
