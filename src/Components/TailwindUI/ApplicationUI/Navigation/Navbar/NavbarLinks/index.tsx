import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { NavigationLinksProps, NavigationLink } from "@Definitions/Types";
import { userCanSeeLink } from "@Lib/auth/userCanSeeLink";

const NavbarLinks: React.FunctionComponent<NavigationLinksProps> = ({
    links,
    currentLinkClassName: currentClassName,
    defaultLinkClassName: defaultClassName,
}): JSX.Element => {
    const [session] = useSession();
    const router = useRouter();
    return (
        <>
            {links &&
                links.map((linkItem: NavigationLink) => {
                    if (userCanSeeLink(session, linkItem)) {
                        const isCurrentLink =
                            router && typeof router.pathname === "string" && router.pathname === linkItem.link;
                        const linkClass = isCurrentLink ? currentClassName : defaultClassName;
                        if (linkItem.link) {
                            return (
                                <div key={linkItem.title} className={linkClass}>
                                    <Link key={linkItem.title} href={linkItem.link}>
                                        {linkItem.title}
                                    </Link>
                                </div>
                            );
                        }
                    }
                    return null;
                })}
        </>
    );
};

export { NavbarLinks };
