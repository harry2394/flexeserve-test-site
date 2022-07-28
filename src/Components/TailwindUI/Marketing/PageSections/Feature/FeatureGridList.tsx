import React from "react";
import { FeatureProps, StaticPageThemes, IFeatureParams } from "@Definitions/UI/Types";
import { HeroIcon } from "@Components/HeroIcon";
import { classNames } from "./classNames";

const Feature: React.FunctionComponent<FeatureProps> = ({ iconName, title, body, color }): JSX.Element => {
    const theme = (color as StaticPageThemes) || "white";

    return (
        <div className="flex">
            <div className={`${classNames[theme].iconColor2} flex-shrink-0 h-6 w-6`}>
                <HeroIcon iconName={iconName || "Check"} size={24} />
            </div>
            <div className="ml-3">
                <dt className={`${classNames[theme].txtColor1} text-lg leading-6 font-medium`}>
                    {title && <span>{title}</span>}
                </dt>
                <dd className={`${classNames[theme].txtColor3} mt-2 text-base`}>{body && <span>{body}</span>}</dd>
            </div>
        </div>
    );
};

export const FeatureGridList: React.FunctionComponent<IFeatureParams> = ({
    featureTheme,
    featureBody,
    featureHeader1,
    featureHeader2,
    featureFeatures,
    ...props
}): JSX.Element => {
    return (
        <div className={`${classNames[featureTheme].backgroundDiv}`} {...props}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {featureHeader1 && (
                        <h2 className={`${classNames[featureTheme].txtColor1} text-3xl font-extrabold`}>
                            {featureHeader1}
                        </h2>
                    )}
                    {featureBody && <p className={`${classNames[featureTheme].body} mt-4 text-lg`}>{featureBody}</p>}
                </div>
                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {featureFeatures &&
                        featureFeatures.map(feature => (
                            <Feature key={feature.title} {...feature} color={featureTheme} />
                        ))}
                </dl>
            </div>
        </div>
    );
};
