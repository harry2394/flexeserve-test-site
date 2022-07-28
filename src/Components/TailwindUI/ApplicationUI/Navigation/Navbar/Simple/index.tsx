import React, { useState } from "react";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { LogoNarrow, LogoWide } from "@Components/Logo";
import { DesktopProfileMenu } from "../NavbarProfile/Desktop";
import { MobileProfileMenu } from "../NavbarProfile/Mobile";
import { NavbarLinks } from "../NavbarLinks";
import { LightClassNames, DarkClassNames } from "./classNames";

const NavbarSimple: React.FunctionComponent = (): JSX.Element => {
    const { darkMode, navBar } = React.useContext(AppConfigContext);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const themeClassNames = darkMode ? DarkClassNames : LightClassNames;
    return (
        <nav className={themeClassNames.navClassName}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-primary-300 border-opacity-25">
                <div className={`flex justify-between ${darkMode ? "items-center" : ""} h-16`}>
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <LogoNarrow className="block lg:hidden h-8 w-auto" />
                            <LogoWide className="hidden lg:block h-8 w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                            <NavbarLinks
                                links={navBar.links}
                                currentLinkClassName={themeClassNames.mainNavbarLinkCurrentClassName}
                                defaultLinkClassName={themeClassNames.mainNavbarLinkDefaultClassName}
                            />
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <DesktopProfileMenu />
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
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
                </div>
            </div>

            {/*
          Mobile menu, toggle classes based on menu state.
      
          Menu open: "block", Menu closed: "hidden"
        */}
            <div className={isMobileNavOpen ? "block sm:hidden" : "hidden sm:hidden"}>
                <div className="pt-2 pb-3 space-y-1">
                    {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <NavbarLinks
                        links={navBar.links}
                        currentLinkClassName={themeClassNames.mobileNavbarLinkCurrentClassName}
                        defaultLinkClassName={themeClassNames.mobileNavbarLinkDefaultClassName}
                    />
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <MobileProfileMenu />
                </div>
            </div>
        </nav>
    );
};

export { NavbarSimple };
