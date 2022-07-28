import React from "react";
import { IHeroParams } from "@Definitions/UI/Types";
import Link from "next/link";
import { classNames } from "./classNames";

export const HeroSimpleCentered: React.FunctionComponent<IHeroParams> = ({
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
        <div className={`${classNames[heroTheme].backgroundDiv} mt-16 mx-auto max-w-7xl px-4 sm:mt-24`} {...props}>
            <div className={`${classNames[heroTheme].backgroundDiv} text-center`}>
                <h1
                    className={`${classNames[heroTheme].txtColor1} text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl`}
                >
                    {heroHeader1 && <span className="block xl:inline">{heroHeader1}</span>}
                    {heroHeader2 && (
                        <span className={`${classNames[heroTheme].txtColor2} block xl:inline`}>{heroHeader2}</span>
                    )}
                </h1>
                {heroBody && (
                    <p
                        className={`${classNames[heroTheme].body} mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}
                    >
                        {heroBody}
                    </p>
                )}
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
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
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 cursor-pointer">
                            <Link href={heroCTASecondary.link || "#"}>
                                <div className={`${classNames[heroTheme].buttonSecondary} ${buttonClasses}`}>
                                    {heroCTASecondary.title}
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <br />
        </div>
    );
};
