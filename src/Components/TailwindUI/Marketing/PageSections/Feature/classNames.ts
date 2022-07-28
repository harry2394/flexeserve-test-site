import { StaticPageThemes } from "@Definitions/UI/Types";

type IClassNames = {
    [theme in StaticPageThemes]: {
        backgroundDiv: string;
        iconColor1: string;
        iconColor2: string;
        txtColor1: string;
        txtColor2: string;
        txtColor3: string;
        body: string;
    };
};
export const classNames: IClassNames = {
    white: {
        backgroundDiv: "bg-white",
        iconColor1: "bg-primary-600 text-white",
        iconColor2: "bg-white text-primary-600",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-gray-500",
        body: "text-gray-500",
    },
    gray: {
        backgroundDiv: "bg-gray-50",
        iconColor1: "bg-primary-600 text-white",
        iconColor2: "bg-gray-50 text-primary-600",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-gray-500",
        body: "text-gray-500",
    },
    light: {
        backgroundDiv: "bg-primary-50",
        iconColor1: "bg-primary-600 text-white",
        iconColor2: "bg-primary-50 text-primary-600",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-gray-500",
        body: "text-gray-500",
    },
    dark: {
        backgroundDiv: "bg-primary-600",
        iconColor1: "bg-primary-500 text-white",
        iconColor2: "bg-primary-600 text-primary-100",
        txtColor1: "text-white",
        txtColor2: "text-primary-50",
        txtColor3: "text-primary-200",
        body: "text-primary-200",
    },
};
