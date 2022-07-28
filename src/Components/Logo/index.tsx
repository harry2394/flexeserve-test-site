import React from "react";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

interface LogoProps {
    className: string;
}

const logoSource = (narrow: boolean, darkMode: boolean) => {
    return `/static/images/logo_${darkMode ? "dark" : "light"}_${narrow ? "narrow" : "wide"}.svg`;
};

const LogoNarrow: React.FunctionComponent<LogoProps> = ({ className }): JSX.Element => {
    const { darkMode } = React.useContext(AppConfigContext);
    return <img className={className} src={logoSource(true, darkMode)} alt="Logo Narrow" />;
};

const LogoWide: React.FunctionComponent<LogoProps> = ({ className }): JSX.Element => {
    const { darkMode } = React.useContext(AppConfigContext);
    return <img className={className} src={logoSource(false, darkMode)} alt="Logo Wide" />;
};

export { LogoNarrow, LogoWide };
