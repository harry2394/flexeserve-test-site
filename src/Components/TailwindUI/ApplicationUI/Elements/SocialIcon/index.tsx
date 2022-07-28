import React from "react";
import { HeroIcon } from "@Components/HeroIcon";
import {
    Google,
    Apple,
    Auth0,
    Facebook,
    Github,
    Twitter,
    Linkedin,
    Youtube,
    Internetexplorer,
} from "@icons-pack/react-simple-icons";

export interface Props extends React.HTMLAttributes<HTMLImageElement> {
    socialNetwork: string;
    size: number;
}

const SocialIcon: React.FunctionComponent<Props> = ({ socialNetwork, size = 24 }): JSX.Element => {
    switch (socialNetwork) {
        case "apple":
            return <Apple size={size} />;
        case "auth0":
            return <Auth0 size={size} />;
        case "facebook":
            return <Facebook size={size} />;
        case "github":
            return <Github size={size} />;
        case "google":
            return <Google size={size} />;
        case "twitter":
            return <Twitter size={size} />;
        case "linkedin":
            return <Linkedin size={size} />;
        case "youtube":
            return <Youtube size={size} />;
        case "internet":
            return <Internetexplorer size={size} />;

        default:
            return <HeroIcon iconName="login" size={size} />; // doesn't currently exist
    }
};

export default SocialIcon;
