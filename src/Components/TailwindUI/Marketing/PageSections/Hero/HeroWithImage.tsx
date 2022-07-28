import React from "react";
import { IHeroParams } from "@Definitions/UI/Types";
import Link from "next/link";
import { classNames } from "./classNames";

const HeroWithImage: React.FunctionComponent<IHeroParams> = ({
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
        <div className={`${classNames[heroTheme].backgroundDiv} lg:relative`} {...props}>
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1
                        className={`${classNames[heroTheme].txtColor1} text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl`}
                    >
                        {heroHeader1 && (
                            <span className={`${classNames[heroTheme].txtColor1} block xl:inline`}>{heroHeader1}</span>
                        )}
                        {heroHeader2 && (
                            <span className={`${classNames[heroTheme].txtColor2} block xl:inline`}>{heroHeader2}</span>
                        )}
                    </h1>
                    {heroBody && (
                        <p
                            className={`${classNames[heroTheme].body} mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl`}
                        >
                            {heroBody}
                        </p>
                    )}
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        {heroCTAPrimary && (
                            <div className="rounded-md shadow cursor-pointer">
                                <Link href={heroCTAPrimary.link || "#"}>
                                    <div className={`${buttonClasses} ${classNames[heroTheme].buttonPrimaryA}`}>
                                        {heroCTAPrimary.title}
                                    </div>
                                </Link>
                            </div>
                        )}
                        {heroCTASecondary && (
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 cursor-pointer">
                                <Link href={heroCTASecondary.link || "#"}>
                                    <div className={`${buttonClasses} ${classNames[heroTheme].buttonSecondaryA}`}>
                                        {heroCTASecondary.title}
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                {heroImageSrc && (
                    <img className="absolute inset-0 w-full h-full object-cover" src={heroImageSrc} alt="" />
                )}
            </div>
        </div>
    );
};

export { HeroWithImage };
