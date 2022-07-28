/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { HeroIcon } from "@Components/HeroIcon";
import { useRouter } from "next/router";

import AppConfigContext from "@Lib/appConfig/appConfigContext";

interface AuthNavLinkProps {
    link?: string;
    iconName?: string;
    label: string;
}

const AuthNavLink: React.FunctionComponent<AuthNavLinkProps> = ({ link, iconName, label }) => {
    const router = useRouter();
    const { darkMode } = React.useContext(AppConfigContext);
    const isCurrentLink = router && typeof router.pathname === "string" && router.pathname === link;
    const linkClass = classNames("group rounded-md px-3 py-2 flex items-center text-sm font-medium", {
        "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50": !darkMode && !isCurrentLink,
        "bg-gray-100 text-gray-900": !darkMode && isCurrentLink,
        "text-gray-800 hover:text-gray-900 hover:bg-gray-50": darkMode,
    });
    const iconClass = classNames("flex-shrink-0 -ml-1 mr-3 h-6 w-6", {
        "text-gray-400 group-hover:text-gray-500": !darkMode && !isCurrentLink,
        "text-gray-500": !darkMode && isCurrentLink,
        "text-gray-500 group-hover:text-gray-500": darkMode,
    });

    return (
        <div key={label} className={linkClass}>
            <div className={iconClass}>
                <HeroIcon iconName={iconName || ""} size={24} />
            </div>
            {link && (
                <Link key={label} href={link}>
                    {label}
                </Link>
            )}
        </div>
    );
};

const AuthNav: React.FunctionComponent = (): JSX.Element => {
    const { auth } = React.useContext(AppConfigContext);
    return (
        <nav className="space-y-1">
            {auth.links &&
                auth.links.map(link => {
                    return <AuthNavLink key={link.link} link={link.link} iconName={link.iconName} label={link.title} />;
                })}
        </nav>
    );
};

export default AuthNav;
