import * as React from "react";
import { Navbar } from "@Components/Navbar";
import { LayoutProps } from "@Definitions/Types";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

const StackedOverlapLayout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    const { layoutStyle, darkMode } = React.useContext(AppConfigContext);

    return (
        <div className={`min-h-screen ${layoutStyle.background ? layoutStyle.background : ""}`}>
            <div className={`${darkMode ? "bg-primary-600 pb-32" : "pb-32"}`}>
                <Navbar />
            </div>
            <div className="-mt-32">{children}</div>
        </div>
    );
};

export { StackedOverlapLayout };
