import React from "react";
import { HeroIcon } from "@Components/HeroIcon";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
    size: number;
    branded?: boolean;
    rounded?: boolean;
    iconName?: string;
    iconOnRight?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
    label,
    size,
    branded,
    rounded,
    iconName,
    iconOnRight,
    ...props
}): JSX.Element => {
    const buttonClass = classNames("inline-flex items-center border shadow-sm font-medium", {
        "px-2.5 py-1.5 text-xs rounded": size === 0,
        "px-3 py-2 text-sm rounded-md": size === 1,
        "px-4 py-2 text-sm rounded-md": size === 2,
        "px-4 py-2 text-base rounded-md": size === 3,
        "px-6 py-3 text-base rounded-md": size === 4,
        "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": !branded,
        "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": branded,
        rounded: size === 0 && !rounded,
        "rounded-md": size > 0 && !rounded,
        "rounded-full": rounded,
    });

    const imageClass = classNames({
        "mr-2": !iconOnRight,
        "ml-2": iconOnRight,
        "h-4 w-4": true,
    });

    const ButtonIcon = () => {
        if (!iconName) return null;
        return (
            <div className={imageClass}>
                <HeroIcon iconName={iconName} size={20} />
            </div>
        );
    };

    return (
        <>
            <button type="button" className={buttonClass} {...props}>
                {!iconOnRight && <ButtonIcon />}
                {label}
                {iconOnRight && <ButtonIcon />}
            </button>
        </>
    );
};

export { Button };
