import React, { useState } from "react";
import { useRouter } from "next/router";
import { ExpandableLinkProps } from "@Definitions/Types";
import { HeroIcon } from "@Components/HeroIcon";
import { userCanSeeLink } from "@Lib/auth/userCanSeeLink";
import { useSession } from "next-auth/client";
import { SidebarLinks } from "..";

const ExpandableLink: React.FunctionComponent<ExpandableLinkProps> = ({
    linkItem,
    currentLinkClassName,
    defaultLinkClassName,
    expandableButtonClassName,
    currentIconClassName,
    defaultIconClassName,
}): JSX.Element => {
    const [session] = useSession();
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const isCurrentLink = router && typeof router.pathname === "string" && router.pathname === linkItem.link;
    const linkClass = isCurrentLink ? currentLinkClassName : defaultLinkClassName;
    const iconClass = isCurrentLink ? currentIconClassName : defaultIconClassName;

    if (!linkItem.children || !linkItem.children.some(child => userCanSeeLink(session, child))) {
        return <div />;
    }
    return (
        <div className="space-y-1" key={linkItem.title}>
            <button type="button" onClick={() => setIsExpanded(!isExpanded)} className={expandableButtonClassName}>
                <div className={linkClass}>
                    <div className={iconClass}>
                        <HeroIcon iconName={linkItem.iconName || ""} />
                    </div>
                    {linkItem.title}
                </div>
                {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                <svg
                    className={`${
                        isExpanded ? "rotate-90" : ""
                    } ml-auto h-5 w-5 transform transition-colors ease-in-out duration-150`}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                </svg>
            </button>
            {/* Expandable link section, show/hide based on state. */}
            {linkItem.children && (
                <div className={`space-y-1 ${isExpanded ? "block" : "hidden"}`}>
                    <SidebarLinks
                        links={linkItem.children}
                        currentLinkClassName={currentLinkClassName}
                        defaultLinkClassName={defaultLinkClassName}
                        currentIconClassName={currentIconClassName}
                        defaultIconClassName={defaultIconClassName}
                    />
                </div>
            )}
        </div>
    );
};

export { ExpandableLink };
