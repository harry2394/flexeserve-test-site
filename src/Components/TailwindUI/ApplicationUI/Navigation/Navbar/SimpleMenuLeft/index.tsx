import React, { useState } from "react";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { LogoNarrow, LogoWide } from "@Components/Logo";
import { NavbarLinks } from "../NavbarLinks";
import { DesktopProfileMenu } from "../NavbarProfile/Desktop";
import { LightClassNames, DarkClassNames } from "./classNames";

const NavbarSimpleMenuLeft: React.FunctionComponent = (): JSX.Element => {
    const { darkMode, navBar } = React.useContext(AppConfigContext);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const themeClassNames = darkMode ? DarkClassNames : LightClassNames;

    return (
        <nav className={themeClassNames.navClassName}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className={`relative flex justify-between ${darkMode ? "items-center" : ""} h-16`}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                            className={themeClassNames.mobileMenuButtonClassName}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/*
                    Heroicon name: menu
        
                    Menu open: "hidden", Menu closed: "block"
                  */}
                            <svg
                                className={isMobileNavOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/*
                    Heroicon name: x
        
                    Menu open: "block", Menu closed: "hidden"
                  */}
                            <svg
                                className={isMobileNavOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <LogoNarrow className="block lg:hidden h-8 w-auto" />
                            <LogoWide className="hidden lg:block h-8 w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <div className="flex space-x-4">
                                {/* Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                <NavbarLinks
                                    links={navBar.links}
                                    currentLinkClassName={themeClassNames.mainNavbarLinkCurrentClassName}
                                    defaultLinkClassName={themeClassNames.mainNavbarLinkDefaultClassName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <DesktopProfileMenu />
                    </div>
                </div>
            </div>

            {/*
            Mobile menu, toggle classes based on menu state.
        
            Menu open: "block", Menu closed: "hidden"
          */}
            <div className={isMobileNavOpen ? "block sm:hidden" : "hidden sm:hidden"}>
                <div className="pt-2 pb-4 space-y-1">
                    {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <NavbarLinks
                        links={navBar.links}
                        currentLinkClassName={themeClassNames.mobileNavbarLinkCurrentClassName}
                        defaultLinkClassName={themeClassNames.mobileNavbarLinkDefaultClassName}
                    />
                </div>
            </div>
        </nav>
    );
};

export { NavbarSimpleMenuLeft };
