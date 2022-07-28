import * as React from "react";

import { SidebarLight } from "@Components/TailwindUI/ApplicationUI/Navigation/Sidebar/SidebarLight";

import { SidebarProps, SimpleSidebarProps } from "@Definitions/Types";

const Sidebar: React.FunctionComponent<SidebarProps> = ({
    isSidebarOpen,
    onToggleSidebar,
    quickAction,
    secondaryLinks,
}): JSX.Element => {
    const sidebarProps: SimpleSidebarProps = {
        isSidebarOpen,
        onToggleSidebar,
        quickAction,
        secondaryLinks,
    };
    return <SidebarLight {...sidebarProps} />;
};

export { Sidebar };
