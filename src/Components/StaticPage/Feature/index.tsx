import * as React from "react";

import { IFeatureParams, StaticPageSection } from "@Definitions/UI/Types";

import { FeatureCenteredGrid } from "@Components/TailwindUI/Marketing/PageSections/Feature/FeatureCenteredGrid";
import { FeatureGridList } from "@Components/TailwindUI/Marketing/PageSections/Feature/FeatureGridList";
import { FeatureList } from "@Components/TailwindUI/Marketing/PageSections/Feature/FeatureList";
import { FeatureOffsetGrid } from "@Components/TailwindUI/Marketing/PageSections/Feature/FeatureOffsetGrid";
import { FeatureSimpleColumn } from "@Components/TailwindUI/Marketing/PageSections/Feature/FeatureSimpleColumn";

const Feature: React.FunctionComponent<StaticPageSection> = ({ type, subType, params }): JSX.Element => {
    const featureParams = params as IFeatureParams;

    if (type === "Feature") {
        switch (subType) {
            case "FeatureCenteredGrid":
                return <FeatureCenteredGrid {...featureParams} />;
            case "FeatureGridList":
                return <FeatureGridList {...featureParams} />;
            case "FeatureList":
                return <FeatureList {...featureParams} />;
            case "FeatureOffsetGrid":
                return <FeatureOffsetGrid {...featureParams} />;
            case "FeatureSimpleColumn":
                return <FeatureSimpleColumn {...featureParams} />;
            default:
                return <div />;
        }
    }
    return <div />;
};

export { Feature };
