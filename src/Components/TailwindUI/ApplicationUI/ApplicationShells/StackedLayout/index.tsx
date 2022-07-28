import * as React from "react";
import { Navbar } from "@Components/Navbar";
import { LayoutProps } from "@Definitions/Types";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

const StackedLayout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    const { layoutStyle } = React.useContext(AppConfigContext);
    return (
        <div className={`min-h-screen ${layoutStyle.background ? layoutStyle.background : ""}`}>
            <Navbar />
            {children}
        </div>
    );
};

export { StackedLayout };
