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

export const FeatureList: React.FunctionComponent<IFeatureParams> = ({
    featureTheme,
    featureBody,
    featureHeader1,
    featureHeader2,
    featureFeatures,
    ...props
}): JSX.Element => {
    return (
        <div className={`${classNames[featureTheme].backgroundDiv}`} {...props}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                    {featureHeader1 && (
                        <h2
                            className={`${classNames[featureTheme].txtColor2} text-base font-semibold uppercase tracking-wide`}
                        >
                            {featureHeader1}
                        </h2>
                    )}
                    {featureHeader2 && (
                        <p className={`${classNames[featureTheme].txtColor1} mt-2 text-3xl font-extrabold`}>
                            {featureHeader2}
                        </p>
                    )}
                    {featureBody && <p className={`${classNames[featureTheme].body} mt-4 text-lg`}>{featureBody}</p>}
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-row sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {featureFeatures &&
                            featureFeatures.map(feature => (
                                <Feature key={feature.title} {...feature} color={featureTheme} />
                            ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
