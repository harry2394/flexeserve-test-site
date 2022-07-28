import * as React from "react";

import { IHeroParams, StaticPageSection } from "@Definitions/UI/Types";

import { HeroSimpleCentered } from "@Components/TailwindUI/Marketing/PageSections/Hero/HeroSimpleCentered";
import { HeroWithImage } from "@Components/TailwindUI/Marketing/PageSections/Hero/HeroWithImage";
import { HeroWithAngledImage } from "@Components/TailwindUI/Marketing/PageSections/Hero/HeroWithAngledImage";
import { HeroWithAppScreenshot } from "@Components/TailwindUI/Marketing/PageSections/Hero/HeroWithAppScreenshot";

const Hero: React.FunctionComponent<StaticPageSection> = ({ type, subType, params }): JSX.Element => {
    const heroParams = params as IHeroParams;

    if (type === "Hero") {
        switch (subType) {
            case "HeroSimpleCentered":
                return <HeroSimpleCentered {...heroParams} />;
            case "HeroWithImage":
                return <HeroWithImage {...heroParams} />;
            case "HeroWithAngledImage":
                return <HeroWithAngledImage {...heroParams} />;
            case "HeroWithAppScreenshot":
                return <HeroWithAppScreenshot {...heroParams} />;
            default:
                return <div />;
        }
    }
    return <div />;
};

export { Hero };
