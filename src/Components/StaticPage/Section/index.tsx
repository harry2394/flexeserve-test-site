import * as React from "react";

import { StaticPageSection } from "@Definitions/UI/Types";
import { Hero } from "@Components/StaticPage/Hero";
import { Feature } from "@Components/StaticPage/Feature";
import { CTA } from "@Components/StaticPage/CTA";
import { Footer } from "@Components/StaticPage/Footer";

const Section: React.FunctionComponent<StaticPageSection> = ({ type, subType, params }): JSX.Element => {
    switch (type) {
        case "Hero":
            return <Hero type={type} subType={subType} params={params} />;
        case "Feature":
            return <Feature type={type} subType={subType} params={params} />;
        case "CTA":
            return <CTA type={type} subType={subType} params={params} />;
        case "Footer":
            return <Footer type={type} subType={subType} params={params} />;
        default:
            return <div />;
    }
};

export { Section };
