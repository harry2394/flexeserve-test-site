import React from "react";
import classNames from "classnames";

interface AvatarProps {
    imagePath?: string;
    size: number;
    rounded?: boolean;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ imagePath, size, rounded, ...props }): JSX.Element => {
    const imageClass = classNames("inline-block", {
        "h-6 w-6": size === 0,
        "h-8 w-8": size === 1,
        "h-10 w-10": size === 2,
        "h-12 w-12": size === 3,
        "h-14 w-14": size === 4,
        "rounded-full": !rounded,
        "rounded-md": rounded,
    });

    const spanClass = classNames(imageClass, "overflow-hidden bg-gray-100");

    if (imagePath) {
        return <img className={imageClass} src={imagePath} alt="" {...props} />;
    }

    return (
        <span className={spanClass} {...props}>
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </span>
    );
};

export { Avatar };
