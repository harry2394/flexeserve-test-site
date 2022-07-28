import React from "react";
import { Transition } from "@headlessui/react";
import { SimpleSidebarProps } from "@Definitions/Types";
import AppConfigContext from "@Lib/appConfig/appConfigContext";
import { LogoWide } from "@Components/Logo";
import { SidebarLinks } from "../SidebarLinks";
import { SidebarProfileMenu } from "../SidebarProfile";
import { LightClassNames, DarkClassNames } from "./classNames";

const SidebarLight: React.FunctionComponent<SimpleSidebarProps> = ({
    isSidebarOpen,
    onToggleSidebar,
    secondaryLinks,
}): JSX.Element => {
    const { darkMode, navBar } = React.useContext(AppConfigContext);
    const themeClassNames = darkMode ? DarkClassNames : LightClassNames;

    return (
        <>
            <div className="md:hidden">
                <div className="fixed inset-0 flex z-40">
                    <Transition show={isSidebarOpen}>
                        <Transition.Child
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0">
                                <div className="absolute inset-0 bg-gray-600 opacity-75" />
                            </div>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className={themeClassNames.mobileDivClassName}>
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => onToggleSidebar(!isSidebarOpen)}
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        {/* Heroicon name: x */}
                                        <svg
                                            className="h-6 w-6 text-white"
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
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <LogoWide className="lg:block h-8 w-auto" />
                                    </div>
                                    <nav className={themeClassNames.mobileNavClassName}>
                                        {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                                        <SidebarLinks
                                            links={navBar.links}
                                            secondaryLinks={secondaryLinks}
                                            currentLinkClassName={themeClassNames.currentLinkClassName}
                                            defaultLinkClassName={themeClassNames.defaultLinkClassName}
                                            expandableButtonClassName={themeClassNames.expandableButtonClassName}
                                            currentIconClassName={themeClassNames.currentIconClassName}
                                            defaultIconClassName={themeClassNames.defaultIconClassName}
                                        />
                                    </nav>
                                </div>
                                <SidebarProfileMenu />
                            </div>
                        </Transition.Child>
                    </Transition>
                    <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                </div>
            </div>
            <div className={themeClassNames.mainDivClassName}>
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className={themeClassNames.mainSubDivClassName}>
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <LogoWide className="lg:block h-8 w-auto" />
                            </div>
                            <nav className={themeClassNames.mainNavClassName}>
                                {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                                <SidebarLinks
                                    links={navBar.links}
                                    secondaryLinks={secondaryLinks}
                                    currentLinkClassName={themeClassNames.currentLinkClassName}
                                    defaultLinkClassName={themeClassNames.defaultLinkClassName}
                                    expandableButtonClassName={themeClassNames.expandableButtonClassName}
                                    currentIconClassName={themeClassNames.currentIconClassName}
                                    defaultIconClassName={themeClassNames.defaultIconClassName}
                                />
                            </nav>
                        </div>
                        <SidebarProfileMenu />
                    </div>
                </div>
            </div>
        </>
    );
};

export { SidebarLight };
