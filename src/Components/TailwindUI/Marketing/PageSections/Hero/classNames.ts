import { StaticPageThemes } from "@Definitions/UI/Types";

type IClassNames = {
    [theme in StaticPageThemes]: {
        body: string;
        backgroundDiv: string;
        txtColor1: string;
        txtColor2: string;
        txtColor3: string;
        txtColor4: string;
        buttonPrimary: string;
        buttonSecondary: string;
        buttonShadowed: string;
        buttonPrimaryA: string;
        buttonSecondaryA: string;
    };
};
export const classNames: IClassNames = {
    white: {
        body: "text-gray-500",
        backgroundDiv: "bg-white",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-primary-600",
        txtColor4: "text-white",
        buttonPrimary: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondary: "text-primary-700 bg-primary-100 hover:bg-primary-200",
        buttonPrimaryA: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondaryA: "text-primary-600 bg-white hover:bg-gray-50",
        buttonShadowed: "",
    },
    gray: {
        body: "text-gray-500",
        backgroundDiv: "bg-gray-50",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-primary-600",
        txtColor4: "text-gray-50",
        buttonPrimary: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondary: "text-primary-700 bg-primary-100 hover:bg-primary-200",
        buttonPrimaryA: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondaryA: "text-primary-600 bg-white hover:bg-gray-50",
        buttonShadowed: "",
    },
    light: {
        body: "text-gray-500",
        backgroundDiv: "bg-primary-50",
        txtColor1: "text-gray-900",
        txtColor2: "text-primary-600",
        txtColor3: "text-primary-600",
        txtColor4: "text-primary-50",
        buttonPrimary: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondary: "text-primary-700 bg-white hover:bg-gray-100",
        buttonPrimaryA: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondaryA: "text-primary-600 bg-white hover:bg-gray-50",
        buttonShadowed: "shadow",
    },
    dark: {
        body: "text-gray-300",
        backgroundDiv: "bg-gray-800",
        txtColor1: "text-white",
        txtColor2: "text-primary-400",
        txtColor3: "text-gray-300",
        txtColor4: "text-gray-800",
        buttonPrimary: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondary: "text-primary-700 bg-gray-100 hover:bg-gray-300",
        buttonPrimaryA: "text-white bg-primary-600 hover:bg-primary-700",
        buttonSecondaryA: "text-primary-600 bg-white hover:bg-gray-200",
        buttonShadowed: "",
    },
};
