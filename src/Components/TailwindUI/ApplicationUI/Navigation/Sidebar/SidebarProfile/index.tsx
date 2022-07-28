import React from "react";
import classNames from "classnames";
import { Button } from "@Components/TailwindUI/ApplicationUI/Elements/Button";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import ProfileImage from "@Components/TailwindUI/ApplicationUI/Elements/ProfileImage";

const SidebarProfileMenu: React.FunctionComponent = (): JSX.Element => {
    const [session] = useSession();
    const { auth, darkMode } = React.useContext(AppConfigContext);

    const linkClass = classNames({
        "text-xs font-medium text-primary-200 group-hover:text-white": darkMode,
        "text-xs font-medium text-gray-500 group-hover:text-gray-700": !darkMode,
    });

    const nameClass = classNames({
        "text-xs font-medium text-white": darkMode,
        "text-xs font-medium text-gray-700 group-hover:text-gray-900": !darkMode,
    });

    if (!session) {
        return (
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <Button label="Sign In" size={2} branded iconName="UserAdd" onClick={() => signIn()} />
            </div>
        );
    }

    return (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full block">
                <div className="flex items-center">
                    <div>
                        <ProfileImage session={session} className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="ml-3">
                        <p className={nameClass}>{session?.user?.email}</p>
                        {auth.links &&
                            auth.links.map(link => {
                                return (
                                    <p className={linkClass}>
                                        <Link href={link.link || ""}>{link.title}</Link>
                                    </p>
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
                                className="text-xs font-medium"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SidebarProfileMenu };
