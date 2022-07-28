import { User } from "next-auth";

type NorthLinkPage = NextPage & {
    Header?: React.FunctionComponent;
    Layout?: React.FunctionComponent<LayoutProps>;
};
export interface Credential {
    label: string;
    type: string;
    placeholder?: string;
}

export interface ExtendedUser extends User {
    roles: string[];
}
export interface AuthenticationProvider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
}
export interface LayoutProps {
    children: JSX.Element[] | JSX.Element;
}

export interface LayoutStyleProps {
    shell: string;
    darkMode: boolean;
    background?: string;
    header?: string;
}

export interface SidebarProps {
    isSidebarOpen: boolean;
    onToggleSidebar(newState: boolean): void;
    quickAction?: string;
    secondaryLinks?: SecondaryLinks;
}

export interface SimpleSidebarProps {
    isSidebarOpen: boolean;
    onToggleSidebar(boolean): void;
    quickAction?: string;
    secondaryLinks?: SecondaryLinks;
}

export interface NavigationLink {
    iconName?: string;
    title: string;
    link?: string;
    roles?: string[];
    children?: NavigationLink[];
}

export interface NavigationLinksProps {
    links: NavigationLink[];
    secondaryLinks?: SecondaryLinks;
    currentLinkClassName: string;
    defaultLinkClassName: string;
    expandableButtonClassName?: string;
    currentIconClassName?: string;
    defaultIconClassName?: string;
}

export interface SecondaryLinks {
    secondaryLinkTitle: string;
    links: NavigationLink[];
}

export interface ExpandableLinkProps {
    linkItem: NavigationLink;
    currentLinkClassName: string;
    defaultLinkClassName: string;
    expandableButtonClassName?: string;
    currentIconClassName?: string;
    defaultIconClassName?: string;
}

export interface SelectMenuProps {
    id: string;
    name: string;
    label: string;
    children: JSX.Element[] | JSX.Element;
}
