import * as React from "react";

import { StackedLayout } from "@Components/TailwindUI/ApplicationUI/ApplicationShells/StackedLayout";
import { StackedOverlapLayout } from "@Components/TailwindUI/ApplicationUI/ApplicationShells/StackedOverlapLayout";
import { SidebarLayout } from "@Components/TailwindUI/ApplicationUI/ApplicationShells/SidebarLayout";
import { LayoutProps } from "@Definitions/Types";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    const { defaultLayout } = React.useContext(AppConfigContext);

    switch (defaultLayout) {
        case "Stacked":
            return <StackedLayout>{children}</StackedLayout>;
        case "StackedOverlap":
            return <StackedOverlapLayout>{children}</StackedOverlapLayout>;
        case "Sidebar":
            return <SidebarLayout>{children}</SidebarLayout>;
        default:
            return <div />;
    }
};

export { Layout };
