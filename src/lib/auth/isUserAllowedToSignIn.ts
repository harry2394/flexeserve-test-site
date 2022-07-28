import { User } from "next-auth";
import { GenericObject } from "next-auth/_utils";

// TODO : load these from DB
const allowListedUsers: string[] = []; // like "graham.orrell@northlink.digital"
const allowListedDomains: string[] = []; // like "@northlink.digital"
const denyListedUsers: string[] = []; // like "graham.orrell@northlink.digital"
const denyListedDomains: string[] = []; // like "@northlink.digital"

export interface IAllowedToSignIn {
    user: User;
    account: GenericObject;
    profile: GenericObject;
}

const isUserAllowedToSignIn = (params: IAllowedToSignIn) => {
    const { user } = params;

    const isAllowed = () => {
        return (
            user &&
            user.email &&
            ((!allowListedUsers && !allowListedDomains) ||
                (allowListedUsers.length === 0 && allowListedDomains.length === 0) ||
                allowListedUsers.includes(user.email) ||
                allowListedDomains.some(domain => user.email!.endsWith(domain)))
        );
    };

    const isDenied = () => {
        return (
            !user ||
            !user.email ||
            (denyListedUsers && denyListedUsers.includes(user.email)) ||
            (denyListedDomains && denyListedDomains.some(domain => user.email!.endsWith(domain)))
        );
    };

    if (!isAllowed()) return Promise.reject(new Error("You have not been set up as a user in the system"));
    if (isDenied()) return Promise.reject(new Error("You are not allowed to sign in to the system"));

    return Promise.resolve(true);
};

export { isUserAllowedToSignIn };

// TODO: Alternative implementation (JH)
// import { User } from "next-auth";

// const allowListedUsers: string[] = []; // like "graham.orrell@northlink.digital"
// const allowListedDomains: string[] = []; // like "@northlink.digital"
// const denyListedUsers: string[] = []; // like "graham.orrell@northlink.digital"
// const denyListedDomains: string[] = []; // like "@northlink.digital"

// interface IUserPermission {
//     allowed: boolean;
//     message: string;
//     account?: any;
//     profile?: any;
//     error?: string;
// }

// export interface IAllowedToSignIn {
//     user: User;
//     account: GenericObject;
//     profile: GenericObject;
// }

// export const isUserAllowedToSignIn = (params: IAllowedToSignIn) => {
//     const { account, profile, user } = params;
//     return new Promise<IUserPermission>(resolve => {
//         const denyMessage = "You are not allowed to sign in to the system";
//         const noSetUpMessage = "You have not been set up as a user in the system";
//         const allowMessage = "Permission Granted";
//         const userErrorMessage = noSetUpMessage;

//         const deniedAccess: IUserPermission = { allowed: false, message: denyMessage, account, profile };
//         const notSetup: IUserPermission = { allowed: false, message: noSetUpMessage, account, profile };
//         const userAllowed: IUserPermission = { allowed: true, message: allowMessage, account, profile };
//         const error: IUserPermission = {
//             allowed: false,
//             message: userErrorMessage,
//             account,
//             profile,
//             error: "unable to handle isUserAllowedToSignIn",
//         };

//         const noUser = !user || typeof user.email !== "string";
//         if (noUser) return resolve(notSetup);

//         const userDenied = denyListedUsers && denyListedUsers.includes(user.email!);
//         if (userDenied) return resolve(deniedAccess);

//         const domainDenied = denyListedDomains && denyListedDomains.some(domain => user.email!.endsWith(domain));
//         if (domainDenied) return resolve(deniedAccess);

//         const noAllowedLists = !allowListedUsers.length && !allowListedDomains.length;
//         if (noAllowedLists) return resolve(userAllowed);

//         const userInAllowedList = allowListedUsers.includes(user.email!);
//         const userDomainAllowed = allowListedDomains.some(domain => user.email!.endsWith(domain));
//         if (!userInAllowedList || !userDomainAllowed) return resolve(deniedAccess);

//         return resolve(error);
//     });
// };
