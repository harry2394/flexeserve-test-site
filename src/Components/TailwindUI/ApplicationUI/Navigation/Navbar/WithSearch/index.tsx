/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { LogoNarrow, LogoWide } from "@Components/Logo";
import { DesktopProfileMenu } from "../NavbarProfile/Desktop";
import { MobileProfileMenu } from "../NavbarProfile/Mobile";
import { NavbarLinks } from "../NavbarLinks";
import { LightClassNames, DarkClassNames } from "./classNames";

const NavbarWithSearch: React.FunctionComponent = (): JSX.Element => {
    const { darkMode, navBar } = React.useContext(AppConfigContext);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const themeClassNames = darkMode ? DarkClassNames : LightClassNames;

    return (
        <nav className={themeClassNames.navClassName}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className={`flex justify-between ${darkMode ? "items-center" : ""} h-16`}>
                    <div className="flex px-2 lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            <LogoNarrow className="block lg:hidden h-8 w-auto" />
                            <LogoWide className="hidden lg:block h-8 w-auto" />
                        </div>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
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
                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Heroicon name: search */}
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className={themeClassNames.searchBoxClassName}
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
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
                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                        <DesktopProfileMenu />
                    </div>
                </div>
            </div>

            {/*
            Mobile menu, toggle classes based on menu state.
        
            Menu open: "block", Menu closed: "hidden"
          */}
            <div className={isMobileNavOpen ? "block md:hidden" : "hidden md:hidden"}>
                <div className="pt-2 pb-3 space-y-1">
                    {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
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

export { NavbarWithSearch };
