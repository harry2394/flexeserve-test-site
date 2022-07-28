import { Session } from "next-auth/client";
import React from "react";
import { Avatar } from "@Components/TailwindUI/ApplicationUI/Elements/Avatar";
import Gravatar from "react-gravatar";

export interface Props extends React.HTMLAttributes<HTMLImageElement> {
    session: Session | null | undefined;
}

const ProfileImage: React.FunctionComponent<Props> = ({ session, ...props }): JSX.Element => {
    if (session?.user?.image) {
        return <Avatar imagePath={session.user.image} size={1} {...props} />;
    }
    return <Gravatar email={session?.user?.email || undefined} size={256} rating="g" default="mm" {...props} />;
};

export default ProfileImage;
