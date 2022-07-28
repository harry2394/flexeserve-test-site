/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { HeadingProps } from "@Definitions/UI/Types";
// import AppConfigContext from "@Lib/appConfig/appConfigContext";
import Head from "next/head";
import { HeroIcon } from "@Components/HeroIcon";
import { useRouter } from "next/router";
import { NavigationLink } from "@Definitions/Types";
import Link from "next/link";
import { classNames } from "./classNames";

type BreadcrumbsProps = {
    breadcrumbs: NavigationLink[];
    theme: string;
};

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({ breadcrumbs, theme }) => {
    const router = useRouter();
    return (
        <div>
            <nav onClick={() => router.back()} className="sm:hidden cursor-pointer" aria-label="Back">
                <div className={`flex items-center text-sm font-medium ${classNames[theme].breadcrumbText}`}>
                    <div className={`flex-shrink-0 -ml-1 mr-1 h-5 w-5 ${classNames[theme].breadcrumbIcon}`}>
                        <HeroIcon iconName="ChevronLeft" size={20} />
                    </div>
                    Back
                </div>
            </nav>
            {breadcrumbs.length > 0 && (
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        {breadcrumbs.map((breadcrumb, i) => (
                            <li key={breadcrumb.title}>
                                <div className={i === 0 ? "" : "flex items-center"}>
                                    {i !== 0 && (
                                        <div
                                            className={`flex-shrink-0 h-5 w-5 mr-4 ${classNames[theme].breadcrumbIcon}`}
                                        >
                                            <HeroIcon iconName="ChevronRight" size={20} />
                                        </div>
                                    )}
                                    <div
                                        className={`text-sm font-medium curser-pointer ${classNames[theme].breadcrumbText}`}
                                    >
                                        <Link href={breadcrumb.link || "#"}>{breadcrumb.title}</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            )}
        </div>
    );
};

const HeadingSimple: React.FunctionComponent<HeadingProps> = ({
    heading,
    title,
    primaryAction,
    secondaryAction,
    breadcrumbs,
    metadata,
    theme,
    layoutClass,
}): JSX.Element => {
    // const { layoutStyle } = React.useContext(AppConfigContext);
    return (
        <div className={classNames[theme].backgroundDiv}>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={layoutClass || "max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"}>
                {breadcrumbs && <Breadcrumbs theme={theme} breadcrumbs={breadcrumbs} />}
                <div className="mt-2 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        {heading && (
                            <h2
                                className={`text-2xl font-bold leading-7 sm:text-3xl sm:truncate ${classNames[theme].header}`}
                            >
                                {heading}
                            </h2>
                        )}
                    </div>
                    <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                        {primaryAction && (
                            <button
                                type="button"
                                onClick={() => primaryAction.actionHandler()}
                                className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${classNames[theme].primaryAction}`}
                            >
                                {primaryAction.title}
                            </button>
                        )}
                        {secondaryAction && (
                            <button
                                type="button"
                                onClick={() => secondaryAction.actionHandler()}
                                className={`ml-3 inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${classNames[theme].secondaryAction}`}
                            >
                                {secondaryAction.title}
                            </button>
                        )}
                    </div>
                </div>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    {metadata &&
                        metadata.map(metadataItem => (
                            <div
                                key={metadataItem.title}
                                className={`mt-2 flex items-center text-sm ${classNames[theme].metadataText}`}
                            >
                                <div className={`flex-shrink-0 mr-1.5 h-5 w-5 ${classNames[theme].metadataIcon}`}>
                                    <HeroIcon iconName={metadataItem.iconName} size={20} />
                                </div>
                                {metadataItem.title}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export { HeadingSimple };
