/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Transition } from "@headlessui/react";
import { Button } from "@Components/TailwindUI/ApplicationUI/Elements/Button";
import { HeroIcon } from "@Components/HeroIcon";
import { signIn, signOut, useSession } from "next-auth/client";

import { useDetectOutsideClick } from "@Lib/hooks/useDetectOutsideClick";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import ProfileImage from "@Components/TailwindUI/ApplicationUI/Elements/ProfileImage";

const DesktopProfileMenu: React.FunctionComponent = (): JSX.Element => {
    const [session] = useSession();
    const dropdownRef = useRef(null);
    const router = useRouter();
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const { auth, navBar, darkMode } = React.useContext(AppConfigContext);

    if (!session) {
        return <Button label="Sign In" size={2} branded iconName="UserAdd" onClick={() => signIn()} />;
    }

    const notificationsButtonClass = classNames({
        "bg-primary-600 p-1 rounded-full text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white": darkMode,
        "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": !darkMode,
    });

    const profileButtonClass = classNames({
        "bg-primary-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-800 focus:ring-white": darkMode,
        "bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": !darkMode,
    });

    const linkClass = classNames({
        "block px-4 py-2 text-sm text-primary-500 hover:bg-primary-100": darkMode,
        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100": !darkMode,
    });

    const signedInClass = classNames({
        "block px-4 py-2 text-sm text-primary-500": darkMode,
        "block px-4 py-2 text-sm text-gray-700": !darkMode,
    });

    return (
        <>
            {navBar && navBar.showNotifications && (
                <button type="button" className={notificationsButtonClass} onClick={() => router.push("/myroute")}>
                    <span className="sr-only">View notifications</span>
                    <HeroIcon iconName="Bell" size={24} className="h-6 w-6" />
                </button>
            )}

            {/* Profile dropdown */}
            <div className="ml-3 relative">
                <div>
                    <button
                        type="button"
                        onClick={() => setIsActive(!isActive)}
                        className={profileButtonClass}
                        id="user-menu"
                        aria-haspopup="true"
                    >
                        <span className="sr-only">Open user menu</span>
                        <ProfileImage session={session} className="h-8 w-8 rounded-full" />
                    </button>
                </div>
                <Transition
                    show={isActive}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div
                        ref={dropdownRef}
                        className="z-10 origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                    >
                        <div className={signedInClass}>
                            Signed in as &nbsp;
                            {session.user.email}
                        </div>
                        <hr />
                        {auth.links &&
                            auth.links.map(link => {
                                return (
                                    <div key={link.link} className={linkClass}>
                                        <Link href={link.link || "#"} passHref>
                                            <a onClick={() => setIsActive(false)}>{link.title}</a>
                                        </Link>
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
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    );
};

export { DesktopProfileMenu };
