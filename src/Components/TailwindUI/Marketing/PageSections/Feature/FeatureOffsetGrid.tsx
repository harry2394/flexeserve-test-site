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
                <dt className={`${classNames[theme].txtColor1} text-lg leading-6 font-medium`}>
                    {title && <span>{title}</span>}
                </dt>
                <dd className={`${classNames[theme].txtColor3} mt-2 text-base`}>{body && <span>{body}</span>}</dd>
            </div>
        </div>
    );
};

export const FeatureOffsetGrid: React.FunctionComponent<IFeatureParams> = ({
    featureTheme,
    featureBody,
    featureHeader1,
    featureHeader2,
    featureFeatures,
    ...props
}): JSX.Element => {
    return (
        <div className={`${classNames[featureTheme].backgroundDiv} overflow-hidden`} {...props}>
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        {featureHeader1 && (
                            <h2
                                className={`${classNames[featureTheme].txtColor1} text-3xl font-extrabold tracking-tight sm:text-4xl`}
                            >
                                {featureHeader1}
                            </h2>
                        )}
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
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
