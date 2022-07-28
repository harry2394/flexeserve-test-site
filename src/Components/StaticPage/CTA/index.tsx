import * as React from "react";

import { ICTAParams, StaticPageSection } from "@Definitions/UI/Types";

import { CTASimpleCentered } from "@Components/TailwindUI/Marketing/PageSections/CTA/CTASimpleCentered";
import { CTASimpleJustified } from "@Components/TailwindUI/Marketing/PageSections/CTA/CTASimpleJustified";
import { CTASimpleStacked } from "@Components/TailwindUI/Marketing/PageSections/CTA/CTASimpleStacked";
import { CTASplitWithImage } from "@Components/TailwindUI/Marketing/PageSections/CTA/CTASplitWithImage";

const CTA: React.FunctionComponent<StaticPageSection> = ({ type, subType, params }): JSX.Element => {
    const ctaParams = params as ICTAParams;

    if (type === "CTA") {
        switch (subType) {
            case "CTASimpleCentered":
                return <CTASimpleCentered {...ctaParams} />;
            case "CTASimpleJustified":
                return <CTASimpleJustified {...ctaParams} />;
            case "CTASimpleStacked":
                return <CTASimpleStacked {...ctaParams} />;
            case "CTASplitWithImage":
                return <CTASplitWithImage {...ctaParams} />;
            default:
                return <div />;
        }
    }
    return <div />;
};

export { CTA };
