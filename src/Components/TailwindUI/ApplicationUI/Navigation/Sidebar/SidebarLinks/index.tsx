import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { NavigationLinksProps, NavigationLink } from "@Definitions/Types";

import { HeroIcon } from "@Components/HeroIcon";
import { userCanSeeLink } from "@Lib/auth/userCanSeeLink";
import { ExpandableLink } from "./ExpandableLink";

const SidebarLinks: React.FunctionComponent<NavigationLinksProps> = ({
    links,
    secondaryLinks,
    currentLinkClassName,
    defaultLinkClassName,
    expandableButtonClassName,
    currentIconClassName,
    defaultIconClassName,
}): JSX.Element => {
    const [session] = useSession();
    const router = useRouter();
    return (
        <>
            {links &&
                links.map((linkItem: NavigationLink) => {
                    if (linkItem.link && userCanSeeLink(session, linkItem)) {
                        const isCurrentLink =
                            router && typeof router.pathname === "string" && router.pathname === linkItem.link;
                        const linkClass = isCurrentLink ? currentLinkClassName : defaultLinkClassName;
                        const iconClass = isCurrentLink ? currentIconClassName : defaultIconClassName;
                        return (
                            <div key={linkItem.title} className={linkClass}>
                                <div className={iconClass}>
                                    <HeroIcon iconName={linkItem.iconName || ""} />
                                </div>
                                <Link key={linkItem.title} href={linkItem.link}>
                                    {linkItem.title}
                                </Link>
                            </div>
                        );
                    }
                    if (linkItem.children) {
                        return (
                            <ExpandableLink
                                linkItem={linkItem}
                                currentLinkClassName={currentLinkClassName}
                                defaultLinkClassName={defaultLinkClassName}
                                expandableButtonClassName={expandableButtonClassName}
                                currentIconClassName={currentIconClassName}
                                defaultIconClassName={defaultIconClassName}
                            />
                        );
                    }
                    return null;
                })}
            {secondaryLinks &&
                secondaryLinks.links &&
                secondaryLinks.links.some(link => userCanSeeLink(session, link)) && (
                    <div className="px-3 py-5 space-y-1">
                        <h3 className="text-xs font-semibold uppercase tracking-wider" id="secondary-headline">
                            {secondaryLinks.secondaryLinkTitle}
                        </h3>
                        <div className="space-y-1" role="group" aria-labelledby="secondary-headline">
                            <SidebarLinks
                                links={secondaryLinks.links}
                                currentLinkClassName={currentLinkClassName}
                                defaultLinkClassName={defaultLinkClassName}
                            />
                        </div>
                    </div>
                )}
        </>
    );
};

export { SidebarLinks };
