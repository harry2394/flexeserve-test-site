/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import { LayoutProps } from "@Definitions/Types";
import { Sidebar } from "@Components/Sidebar";
import AppConfigContext from "@Lib/appConfig/appConfigContext";

const SidebarLayout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    const { layoutStyle } = React.useContext(AppConfigContext);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const onToggleSidebar = (newState: boolean) => {
        setIsMobileNavOpen(newState);
    };
    return (
        <div className={`h-screen flex overflow-hidden ${layoutStyle.background ? layoutStyle.background : ""}`}>
            <Sidebar
                isSidebarOpen={isMobileNavOpen}
                onToggleSidebar={(newState: boolean) => onToggleSidebar(newState)}
            />
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="z-50 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        type="button"
                        className={`${
                            isMobileNavOpen ? "hidden" : "block"
                        } -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                    >
                        <span className="sr-only">Open sidebar</span>
                        {/* Heroicon name: menu */}
                        <svg
                            className="h-6 w-6"
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
                    </button>
                </div>
                <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export { SidebarLayout };
