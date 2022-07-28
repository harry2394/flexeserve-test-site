import { User } from "next-auth";

const getRolesForUser = (user: User) => {
    return user.email && user.email.endsWith("@northlink.digital") ? ["admin"] : ["user"];
};

export { getRolesForUser };
