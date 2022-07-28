import { StaticPageThemes } from "@Definitions/UI/Types";

type IClassNames = {
    [theme in StaticPageThemes]: {
        backgroundDiv: string;
        copyrightMessage: string;
        socialLink: string;
        navigationLink: string;
    };
};

export const classNames: IClassNames = {
    white: {
        backgroundDiv: "bg-white",
        copyrightMessage: "text-gray-400",
        socialLink: "text-gray-400 hover:text-gray-500",
        navigationLink: "text-gray-500 hover:text-gray-900",
    },
    gray: {
        backgroundDiv: "bg-gray-50",
        copyrightMessage: "text-gray-400",
        socialLink: "text-gray-400 hover:text-gray-500",
        navigationLink: "text-gray-500 hover:text-gray-900",
    },
    light: {
        backgroundDiv: "bg-primary-50",
        copyrightMessage: "text-primary-900",
        socialLink: "text-primary-900 hover:text-primary-700",
        navigationLink: "text-primary-900 hover:text-primary-700",
    },
    dark: {
        backgroundDiv: "bg-primary-600",
        copyrightMessage: "text-primary-200",
        socialLink: "text-primary-200 hover:text-white",
        navigationLink: "text-primary-200 hover:text-white",
    },
};
