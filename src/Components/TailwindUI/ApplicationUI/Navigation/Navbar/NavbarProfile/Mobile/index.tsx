import React from "react";
import classNames from "classnames";
import { Button } from "@Components/TailwindUI/ApplicationUI/Elements/Button";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

import ProfileImage from "@Components/TailwindUI/ApplicationUI/Elements/ProfileImage";

const MobileProfileMenu: React.FunctionComponent = (): JSX.Element => {
    const [session] = useSession();
    const { auth, navBar, darkMode } = React.useContext(AppConfigContext);

    const notificationsButtonClass = classNames({
        "ml-auto flex-shrink-0 bg-primary-600 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white": darkMode,
        "ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": !darkMode,
    });

    const linkClass = classNames({
        "block px-3 py-2 rounded-md space-y-1 text-base font-medium text-white hover:text-white hover:bg-primary-500": darkMode,
        "block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100": !darkMode,
    });

    const nameClass = classNames({
        "text-base font-medium text-white": darkMode,
        "text-base font-medium text-gray-800": !darkMode,
    });

    if (!session) {
        return (
            <div className="flex items-center px-5">
                <Button label="Sign In" size={2} branded iconName="UserAdd" onClick={() => signIn()} />
            </div>
        );
    }

    return (
        <>
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full">
                        <ProfileImage session={session} className="h-8 w-8 rounded-full" />
                    </div>
                </div>

                <div className="ml-3">
                    <div className={nameClass}>{session?.user?.email}</div>
                </div>
                {navBar && navBar.showNotifications && (
                    <button type="button" className={notificationsButtonClass}>
                        <span className="sr-only">View notifications</span>
                        {/* Heroicon name: bell */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className="mt-3 px-2 space-y-1">
                {auth.links &&
                    auth.links.map(link => {
                        return (
                            <div key={link.title} className={linkClass}>
                                <Link href={link.link || ""}>{link.title}</Link>
                            </div>
                        );
                    })}
                <div className={linkClass}>
                    <button
                        type="button"
                        onClick={() =>
                            signOut({
                                callbackUrl: window.location.pathname,
                            })
                        }
                        className="text-base font-medium"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
};

export { MobileProfileMenu };
