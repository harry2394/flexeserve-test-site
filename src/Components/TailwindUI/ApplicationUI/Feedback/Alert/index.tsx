import React from "react";
import { HeroIcon } from "@Components/HeroIcon";
import { classNames } from "./classNames";

interface AlertProps extends React.HTMLAttributes<HTMLButtonElement> {
    theme: string;
    accentBorder: boolean;
    header?: string;
    iconName?: string;
    children: JSX.Element[] | JSX.Element;
}

const Alert: React.FunctionComponent<AlertProps> = ({
    theme,
    accentBorder,
    header,
    iconName,
    children,
}): JSX.Element => {
    return (
        <div className={`rounded-md p-4 ${accentBorder ? "border-l-4" : ""} ${classNames[theme].mainDiv}`}>
            <div className="flex">
                <div className={`flex-shrink-0 h-5 w-5 ${classNames[theme].icon}`}>
                    <HeroIcon iconName={iconName || ""} size={20} />
                </div>
                <div className="ml-3">
                    {header && <h3 className={`text-sm mb-2 font-medium ${classNames[theme].header}`}>{header}</h3>}
                    <div className={`text-sm ${classNames[theme].body}`}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export { Alert };
