interface IClasses {
    mainDiv: string;
    header: string;
    body: string;
    icon: string;
}

export const classNames: Record<string, IClasses> = {
    red: {
        mainDiv: "bg-red-50 border-red-400",
        header: "text-red-800",
        body: "text-red-700",
        icon: "text-red-400",
    },
    yellow: {
        mainDiv: "bg-yellow-50 border-yellow-400",
        header: "text-yellow-800",
        body: "text-yellow-700",
        icon: "text-yellow-400",
    },
    green: {
        mainDiv: "bg-green-50 border-green-400",
        header: "text-green-800",
        body: "text-green-700",
        icon: "text-green-400",
    },
    branded: {
        mainDiv: "bg-primary-50 border-primary-400",
        header: "text-primary-800",
        body: "text-primary-700",
        icon: "text-primary-400",
    },
};
