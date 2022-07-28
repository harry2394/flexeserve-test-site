interface IClassNames {
    [theme: string]: {
        backgroundDiv: string;
        breadcrumbIcon: string;
        breadcrumbText: string;
        header: string;
        primaryAction: string;
        secondaryAction: string;
        metadataIcon: string;
        metadataText: string;
    };
}

export const classNames: IClassNames = {
    white: {
        backgroundDiv: "bg-white shadow",
        breadcrumbIcon: "text-gray-400",
        breadcrumbText: "text-gray-500 hover:text-gray-700",
        header: "text-gray-900",
        primaryAction: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500",
        secondaryAction: "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
        metadataIcon: "text-gray-400",
        metadataText: "text-gray-500",
    },
    gray: {
        backgroundDiv: "bg-gray-50",
        breadcrumbIcon: "text-gray-400",
        breadcrumbText: "text-gray-500 hover:text-gray-700",
        header: "text-gray-900",
        primaryAction: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500",
        secondaryAction: "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
        metadataIcon: "text-gray-400",
        metadataText: "text-gray-500",
    },
    light: {
        backgroundDiv: "bg-primary-50",
        breadcrumbIcon: "text-primary-400",
        breadcrumbText: "text-primary-500 hover:text-primary-700",
        header: "text-primary-600",
        primaryAction: "border-primary-700 bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
        secondaryAction: "border-transparent text-primary-600 bg-white hover:bg-primary-200 focus:ring-primary-500",
        metadataIcon: "text-primary-800",
        metadataText: "text-primary-900",
    },
    dark: {
        backgroundDiv: "bg-primary-600",
        breadcrumbIcon: "text-primary-100",
        breadcrumbText: "text-primary-200 hover:text-white",
        header: "text-white",
        primaryAction: "border-primary-700 text-primary-600 bg-white hover:bg-primary-50 focus:ring-primary-500",
        secondaryAction:
            "border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500",
        metadataIcon: "text-primary-100",
        metadataText: "text-primary-200",
    },
};
