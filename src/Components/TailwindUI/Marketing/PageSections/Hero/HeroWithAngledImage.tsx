import React from "react";
import { IHeroParams } from "@Definitions/UI/Types";
import Link from "next/link";
import { classNames } from "./classNames";

export const HeroWithAngledImage: React.FunctionComponent<IHeroParams> = ({
    heroTheme,
    heroBody,
    heroHeader1,
    heroHeader2,
    heroImageSrc,
    heroCTAPrimary,
    heroCTASecondary,
    ...props
}): JSX.Element => {
    const buttonClasses =
        "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10";

    return (
        <div className={`${classNames[heroTheme].backgroundDiv} relative overflow-hidden`} {...props}>
            <div className="max-w-7xl mx-auto">
                <div
                    className={`${classNames[heroTheme].backgroundDiv} relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
                >
                    <svg
                        className={`${classNames[heroTheme].txtColor4} hidden lg:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2`}
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />
                    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1
                                className={`${classNames[heroTheme].txtColor1} text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl`}
                            >
                                {heroHeader1 && <span className="block xl:inline">{heroHeader1}</span>}
                                {heroHeader2 && (
                                    <span className={`${classNames[heroTheme].txtColor2} block xl:inline`}>
                                        {heroHeader2}
                                    </span>
                                )}
                            </h1>
                            {heroBody && (
                                <p
                                    className={`${classNames[heroTheme].body} mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
                                >
                                    {heroBody}
                                </p>
                            )}
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                {heroCTAPrimary && (
                                    <div className="rounded-md shadow cursor-pointer">
                                        <Link href={heroCTAPrimary.link || "#"}>
                                            <div className={`${classNames[heroTheme].buttonPrimary} ${buttonClasses}`}>
                                                {heroCTAPrimary.title}
                                            </div>
                                        </Link>
                                    </div>
                                )}
                                {heroCTASecondary && (
                                    <div
                                        className={`${classNames[heroTheme].buttonShadowed} mt-3 sm:mt-0 sm:ml-3 cursor-pointer`}
                                    >
                                        <Link href={heroCTASecondary.link || "#"}>
                                            <div
                                                className={`${classNames[heroTheme].buttonSecondary} ${buttonClasses}`}
                                            >
                                                {heroCTASecondary.title}
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                {heroImageSrc && (
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={heroImageSrc}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};
