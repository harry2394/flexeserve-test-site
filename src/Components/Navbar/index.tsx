import * as React from "react";
import { NavbarSimple } from "@Components/TailwindUI/ApplicationUI/Navigation/Navbar/Simple";
import { NavbarSimpleMenuLeft } from "@Components/TailwindUI/ApplicationUI/Navigation/Navbar/SimpleMenuLeft";
import { NavbarQuickAction } from "@Components/TailwindUI/ApplicationUI/Navigation/Navbar/QuickAction";
import { NavbarWithSearch } from "@Components/TailwindUI/ApplicationUI/Navigation/Navbar/WithSearch";
import { NavbarWithCenteredSearch } from "@Components/TailwindUI/ApplicationUI/Navigation/Navbar/WithCenteredSearch";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

const Navbar: React.FunctionComponent = (): JSX.Element => {
    const { navBar } = React.useContext(AppConfigContext);

    const { style } = navBar;

    switch (style) {
        case "Simple":
            return <NavbarSimple />;
        case "SimpleMenuLeft":
            return <NavbarSimpleMenuLeft />;
        case "QuickAction":
            return <NavbarQuickAction />;
        case "WithSearch":
            return <NavbarWithSearch />;
        case "WithCenteredSearch":
            return <NavbarWithCenteredSearch />;
        default:
            return <NavbarSimple />;
    }
};

export { Navbar };
