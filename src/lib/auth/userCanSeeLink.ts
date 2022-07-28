import { Session } from "next-auth/client";
import { ExtendedUser, NavigationLink } from "@Definitions/Types";

// Public (non signed in) users can only see links with no Roles attached
// Signed in users can see links with the * role attached, or if they are in a role that is attached
const userCanSeeLink = (session: Session | null | undefined, link: NavigationLink) => {
    // Links without roles can be seen by everyone
    if (!link.roles) return true;
    if (!session || !session.user) return false;
    // Links with the * role can be seen by anyone who is logged in
    if (link.roles.includes("*")) return session.user;
    // Otherwise links can be seen if the user belongs to any role attached to the link
    const extendedUser = session.user as ExtendedUser;
    return link.roles.some(linkRole => extendedUser.roles.includes(linkRole));
};

export { userCanSeeLink };
