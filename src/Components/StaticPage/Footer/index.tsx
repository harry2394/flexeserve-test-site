import * as React from "react";

import { IFooterParams, StaticPageSection } from "@Definitions/UI/Types";

import { FooterSocialLinksOnly } from "@Components/TailwindUI/Marketing/PageSections/Footer/FooterSocialLinksOnly";
import { FooterSimpleCentered } from "@Components/TailwindUI/Marketing/PageSections/Footer/FooterSimpleCentered";

const Footer: React.FunctionComponent<StaticPageSection> = ({ type, subType, params }): JSX.Element => {
    const footerParams = params as IFooterParams;

    if (type === "Footer") {
        switch (subType) {
            case "FooterSocialLinksOnly":
                return <FooterSocialLinksOnly {...footerParams} />;
            case "FooterSimpleCentered":
                return <FooterSimpleCentered {...footerParams} />;
            default:
                return <div />;
        }
    }
    return <div />;
};

export { Footer };
