import { StaticPageThemes } from "@Definitions/UI/Types";

type IClassNames = {
    [theme in StaticPageThemes]: {
        backgroundDiv: string;
        header1: string;
        header2: string;
        body: string;
        CTAPrimary: string;
        CTASecondary: string;
    };
};

export const classNames: IClassNames = {
    white: {
        backgroundDiv: "bg-white",
        header1: "text-gray-900",
        header2: "text-primary-600",
        body: "text-gray-500",
        CTAPrimary: "bg-primary-600 hover:bg-primary-700 text-white",
        CTASecondary: "bg-primary-100 hover:bg-primary-200 text-primary-700",
    },
    gray: {
        backgroundDiv: "bg-gray-50",
        header1: "text-gray-900",
        header2: "text-primary-600",
        body: "text-gray-500",
        CTAPrimary: "text-white bg-primary-600 hover:bg-primary-700",
        CTASecondary: "text-primary-600 bg-white hover:bg-primary-50",
    },
    light: {
        backgroundDiv: "bg-primary-50",
        header1: "text-gray-900",
        header2: "text-primary-600",
        body: "text-primary-900",
        CTAPrimary: "bg-primary-600 hover:bg-primary-700 text-white",
        CTASecondary: "text-primary-600 bg-white hover:bg-primary-200",
    },
    dark: {
        backgroundDiv: "bg-primary-600",
        header1: "text-white",
        header2: "text-primary-200",
        body: "text-primary-200",
        CTAPrimary: "text-primary-600 bg-white hover:bg-primary-50",
        CTASecondary: "text-primary-700 bg-primary-100 hover:bg-primary-200",
    },
};
