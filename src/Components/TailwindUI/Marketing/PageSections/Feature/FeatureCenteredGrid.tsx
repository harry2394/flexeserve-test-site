import React from "react";
import { FeatureProps, StaticPageThemes, IFeatureParams } from "@Definitions/UI/Types";
import { HeroIcon } from "@Components/HeroIcon";
import { classNames } from "./classNames";

const Feature: React.FunctionComponent<FeatureProps> = ({ iconName, title, body, color }): JSX.Element => {
    const theme = (color as StaticPageThemes) || "white";

    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div
                    className={`${classNames[theme].iconColor1} flex items-center justify-center h-12 w-12 rounded-md`}
                >
                    <HeroIcon iconName={iconName || "Check"} size={24} />
                </div>
            </div>
            <div className="ml-4">
                <dt className={`${classNames[theme].txtColor1} text-lg leading-6 font-medium`}>
                    {title && <span>{title}</span>}
                </dt>
                <dd className={`${classNames[theme].txtColor3} mt-2 text-base`}>{body && <span>{body}</span>}</dd>
            </div>
        </div>
    );
};

export const FeatureCenteredGrid: React.FunctionComponent<IFeatureParams> = ({
    featureTheme,
    featureBody,
    featureHeader1,
    featureHeader2,
    featureFeatures,
    ...props
}): JSX.Element => {
    return (
        <div className={`${classNames[featureTheme].backgroundDiv} py-12`} {...props}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    {featureHeader1 && (
                        <h2
                            className={`${classNames[featureTheme].txtColor2} text-base font-semibold tracking-wide uppercase`}
                        >
                            {featureHeader1}
                        </h2>
                    )}
                    {featureHeader2 && (
                        <p
                            className={`${classNames[featureTheme].txtColor1} mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl`}
                        >
                            {featureHeader2}
                        </p>
                    )}
                    {featureBody && (
                        <p className={`${classNames[featureTheme].body} mt-4 max-w-2xl text-xl lg:mx-auto`}>
                            {featureBody}
                        </p>
                    )}
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
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
