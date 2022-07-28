import React from "react";
import { ICTAParams } from "@Definitions/UI/Types";
import Link from "next/link";
import { classNames } from "./classNames";

const CTASplitWithImage: React.FunctionComponent<ICTAParams> = ({
    ctaTheme,
    ctaBody,
    ctaHeader1,
    ctaHeader2,
    ctaImageSrc,
    ctaCTAPrimary,
    ctaCTASecondary,
}): JSX.Element => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div
                    className={`${classNames[ctaTheme].backgroundDiv} rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
                >
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold sm:text-4xl">
                                {ctaHeader1 && (
                                    <span className={`block ${classNames[ctaTheme].header1}`}>{ctaHeader1}</span>
                                )}
                                {ctaHeader2 && (
                                    <span className={`block ${classNames[ctaTheme].header2}`}>{ctaHeader2}</span>
                                )}
                            </h2>
                            {ctaBody && (
                                <p className={`mt-4 text-lg leading-6 ${classNames[ctaTheme].body}`}>{ctaBody}</p>
                            )}
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                {ctaCTAPrimary && (
                                    <Link href={ctaCTAPrimary.link || "#"}>
                                        <div
                                            className={`mt-8 mr-4 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium cursor-pointer ${classNames[ctaTheme].CTAPrimary}`}
                                        >
                                            {ctaCTAPrimary.title}
                                        </div>
                                    </Link>
                                )}
                                {ctaCTASecondary && (
                                    <Link href={ctaCTASecondary.link || "#"}>
                                        <div
                                            className={`mt-8 mr-4 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium cursor-pointer ${classNames[ctaTheme].CTASecondary}`}
                                        >
                                            {ctaCTASecondary.title}
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        {ctaImageSrc && (
                            <img
                                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                                src={ctaImageSrc}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CTASplitWithImage };
