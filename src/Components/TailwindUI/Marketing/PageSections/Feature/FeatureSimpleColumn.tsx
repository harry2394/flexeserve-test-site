import React from "react";
import { FeatureProps, StaticPageThemes, IFeatureParams } from "@Definitions/UI/Types";
import { HeroIcon } from "@Components/HeroIcon";
import { classNames } from "./classNames";

const Feature: React.FunctionComponent<FeatureProps> = ({ iconName, title, body, color }): JSX.Element => {
    const theme = (color as StaticPageThemes) || "white";

    return (
        <div>
            <div className={`${classNames[theme].iconColor1} flex items-center justify-center h-12 w-12 rounded-md`}>
                <div className="h-6 w-6">
                    <HeroIcon iconName={iconName || "Check"} size={24} />
                </div>
            </div>
            <div className="mt-5">
                <dt className={`${classNames[theme].txtColor1}  text-lg leading-6 font-medium`}>
                    {title && <span>{title}</span>}
                </dt>
                <dd className={`${classNames[theme].txtColor3}  mt-2 text-base`}>{body && <span>{body}</span>}</dd>
            </div>
        </div>
    );
};

export const FeatureSimpleColumn: React.FunctionComponent<IFeatureParams> = ({
    featureTheme,
    featureBody,
    featureHeader1,
    featureHeader2,
    featureFeatures,
    ...props
}): JSX.Element => {
    let numColumns = 3;
    if (featureFeatures) {
        if (featureFeatures.length % 3 !== 0) {
            if (featureFeatures.length % 4 === 0) {
                numColumns = 4;
            } else {
                numColumns = 2;
            }
        }
    }

    return (
        <div className={`${classNames[featureTheme].backgroundDiv} py-12`} {...props}>
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {featureHeader1 && <h2 className="sr-only">{featureHeader1}</h2>}
                <dl className={`space-y-10 lg:space-y-0 lg:grid lg:grid-cols-${numColumns} lg:gap-8`}>
                    {featureFeatures &&
                        featureFeatures.map(feature => (
                            <Feature key={feature.title} {...feature} color={featureTheme} />
                        ))}
                </dl>
            </div>
        </div>
    );
};
