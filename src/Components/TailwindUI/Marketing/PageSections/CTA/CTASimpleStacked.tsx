import React from "react";
import { ICTAParams } from "@Definitions/UI/Types";
import Link from "next/link";
import { classNames } from "./classNames";

const CTASimpleStacked: React.FunctionComponent<ICTAParams> = ({
    ctaTheme,
    ctaHeader1,
    ctaHeader2,
    ctaCTAPrimary,
    ctaCTASecondary,
}): JSX.Element => {
    return (
        <div className={classNames[ctaTheme].backgroundDiv}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {ctaHeader1 && <span className={`block ${classNames[ctaTheme].header1}`}>{ctaHeader1}</span>}
                    {ctaHeader2 && <span className={`block ${classNames[ctaTheme].header2}`}>{ctaHeader2}</span>}
                </h2>
                <div className="mt-8 flex">
                    {ctaCTAPrimary && (
                        <div className="inline-flex rounded-md shadow cursor-pointer">
                            <Link href={ctaCTAPrimary.link || "#"}>
                                <div
                                    className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${classNames[ctaTheme].CTAPrimary}`}
                                >
                                    {ctaCTAPrimary.title}
                                </div>
                            </Link>
                        </div>
                    )}
                    {ctaCTASecondary && (
                        <div className="ml-3 inline-flex cursor-pointer">
                            <Link href={ctaCTASecondary.link || "#"}>
                                <div
                                    className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${classNames[ctaTheme].CTASecondary}`}
                                >
                                    {ctaCTASecondary.title}
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export { CTASimpleStacked };
