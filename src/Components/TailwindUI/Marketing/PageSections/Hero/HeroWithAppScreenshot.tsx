import React from "react";
import { IHeroParams } from "@Definitions/UI/Types";
import { classNames } from "./classNames";

export const HeroWithAppScreenshot: React.FunctionComponent<IHeroParams> = ({
    heroTheme,
    heroBody,
    heroHeader1,
    heroHeader2,
    heroImageSrc,
    heroCTAPrimary,
    heroCTASecondary,
    ...props
}): JSX.Element => {
    return (
        <div {...props}>
            <div className={`${classNames[heroTheme].backgroundDiv} relative overflow-hidden`}>
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                        <div className="text-center">
                            <h1
                                className={`${classNames[heroTheme].txtColor1} text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl`}
                            >
                                {heroHeader1 && (
                                    <span className={`${classNames[heroTheme].txtColor1} block`}>{heroHeader1}</span>
                                )}
                                {heroHeader2 && (
                                    <span className={`${classNames[heroTheme].txtColor2} block`}>{heroHeader2}</span>
                                )}
                            </h1>
                            {heroBody && (
                                <p
                                    className={`${classNames[heroTheme].body} mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}
                                >
                                    {heroBody}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                        <div className="flex-1" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        {heroImageSrc && <img className="relative rounded-lg shadow-lg" src={heroImageSrc} alt="" />}
                    </div>
                </div>
            </div>
        </div>
    );
};
