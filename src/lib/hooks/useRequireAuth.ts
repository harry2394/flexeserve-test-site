import { useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { ExtendedUser } from "@Definitions/Types";

const useRequireAuth = (requiredRoles: string[] = []) => {
    const [session, loading] = useSession();
    const router = useRouter();

    const isAuthorised = () => {
        if (!session) return false;
        if (!requiredRoles) return true;
        if (requiredRoles.length === 0) return true;

        const extendedUser = session.user as ExtendedUser;
        return requiredRoles.some(pageRole => extendedUser.roles.includes(pageRole));
    };

    useEffect(() => {
        // If they are not signed in at all, redirect to a sign in page
        if (!loading && !session) {
            router.push("/auth/signin");
        }
    }, [session, loading, router]);

    return [session, isAuthorised()];
};

export { useRequireAuth };
