// @ts-nocheck
import * as React from "react";
import { IconMap } from "./IconMap";

export interface Props extends React.SVGProps<SVGSVGElement> {
    iconName: string;
    size?: number;
}

const HeroIcon: React.FunctionComponent<Props> = ({ size = 24, iconName, ...props }): JSX.Element => {
    const Icon = IconMap[iconName];
    if (!Icon) {
        return <div />;
    }
    return <Icon size={size} {...props} />;
};

export { HeroIcon };
