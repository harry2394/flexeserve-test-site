/*

layoutStyle.background = optional override of main background
navBar.style = Simple | SimpleMenuLeft | QuickAction | WithSearch | WithCenteredSearch
navBar.darkMode = true/false
navBar.quickAction = [optional string]

imageSrcLady:
  "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
imageSrcScreenshot:
  "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",

*/

import { StaticPage } from "@Definitions/UI/Types";
import { NavigationLink } from "@Definitions/Types";

export interface IAppConfig {
    appName: string;
    staticPage?: StaticPage;
    staticPages?: StaticPage[];
    defaultLayout: string;
    darkMode: boolean;
    layoutStyle: {
        background: string;
    };
    auth: {
        links: NavigationLink[];
    };
    navBar: {
        style: string;
        quickAction?: string;
        showNotifications: boolean;
        links: NavigationLink[];
        secondaryLinks: {
            secondaryLinkTitle: string;
            links: NavigationLink[];
        };
    };
}

const appConfig: IAppConfig = {
    appName: "NorthLink-Next",
    defaultLayout: "Stacked",
    darkMode: true,
    layoutStyle: {
        background: "bg-white",
    },
    staticPages: [
        {
            slug: "/landing",
            title: "Landing",
            sections: [
                {
                    type: "Hero",
                    subType: "HeroWithAngledImage",
                    params: {
                        heroTheme: "white",
                        heroHeader1: "Data to enrich your ",
                        heroHeader2: "online business",
                        heroBody:
                            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
                        heroCTAPrimary: { title: "Get started", link: "/" },
                        heroCTASecondary: { title: "Live demo", link: "/" },
                        heroImageSrc:
                            "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
                    },
                },
                {
                    type: "Feature",
                    subType: "FeatureSimpleColumn",
                    params: {
                        featureTheme: "white",
                        featureHeader1: "Title",
                        featureHeader2: "A better way to subtitle",
                        featureBody:
                            "Lorem ipsum body sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
                        featureFeatures: [
                            {
                                iconName: "GlobeAlt",
                                title: "Feature title one",
                                body:
                                    "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
                            },
                            {
                                iconName: "Scale",
                                title: "Feature title two",
                                body:
                                    "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
                            },
                            {
                                iconName: "LightningBolt",
                                title: "Feature title three",
                                body:
                                    "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
                            },
                            {
                                iconName: "Annotation",
                                title: "Feature title four",
                                body:
                                    "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
                            },
                        ],
                    },
                },
                {
                    type: "CTA",
                    subType: "CTASplitWithImage",
                    params: {
                        ctaTheme: "white",
                        ctaHeader1: "Ready to dive in?",
                        ctaHeader2: "Start your free trial today",
                        ctaBody:
                            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
                        ctaCTAPrimary: { title: "Get started", link: "/" },
                        ctaCTASecondary: { title: "Learn more", link: "/" },
                        ctaImageSrc: "https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg",
                    },
                },
                {
                    type: "Footer",
                    subType: "FooterSimpleCentered",
                    params: {
                        footerTheme: "white",
                        footerCopyrightMessage: "© 2020 NorthLink Digital. All rights reserved.",
                        footerSocialLinks: [
                            {
                                socialNetwork: "facebook",
                                link: "https://www.facebook.com",
                            },
                            {
                                socialNetwork: "google",
                                link: "https://www.google.com",
                            },
                        ],
                        footerLinks: [
                            { title: "Link 1", link: "/link1" },
                            { title: "Link 2", link: "/link2" },
                            { title: "Link 3", link: "/link3" },
                            { title: "Link 4", link: "/link4" },
                            { title: "Link 5", link: "/link5" },
                            { title: "Link 6", link: "/link6" },
                        ],
                    },
                },
            ],
        },

        // {
        //     slug: "/themes",
        //     title: "Test Themes",
        //     sections: [
        //         // FEATURES FeatureOffsetGrid
        //         {
        //             type: "Feature",
        //             subType: "FeatureOffsetGrid",
        //             params: {
        //                 featureTheme: White,
        //                 featureHeader1: `OffsetGrid ${White.toUpperCase()} `,
        //                 featureHeader2: "",
        //                 featureBody: "",
        //                 featureFeatures: [
        //                     {
        //                         iconName: "GlobeAlt",
        //                         title: `Feature title one`,
        //                         body:
        //                             "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Scale",
        //                         title: "Feature title two",
        //                         body:
        //                             "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "LightningBolt",
        //                         title: "Feature title three",
        //                         body:
        //                             "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Annotation",
        //                         title: "Feature title four",
        //                         body:
        //                             "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                 ],
        //             },
        //         },

        //         // FEATURES FeatureSimpleColumn
        //         {
        //             type: "Feature",
        //             subType: "FeatureSimpleColumn",
        //             params: {
        //                 featureTheme: Light,
        //                 featureHeader1: "Title",
        //                 featureHeader2: "A better way to subtitle",
        //                 featureBody:
        //                     "Lorem ipsum body sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        //                 featureFeatures: [
        //                     {
        //                         iconName: "GlobeAlt",
        //                         title: `SimpleColumn ${Light.toUpperCase()} `,
        //                         body:
        //                             "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Scale",
        //                         title: "Feature title two",
        //                         body:
        //                             "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "LightningBolt",
        //                         title: "Feature title three",
        //                         body:
        //                             "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Annotation",
        //                         title: "Feature title four",
        //                         body:
        //                             "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                 ],
        //             },
        //         },

        //         // FEATURES FeatureList
        //         {
        //             type: "Feature",
        //             subType: "FeatureList",
        //             params: {
        //                 featureTheme: Dark,
        //                 featureHeader1: `List ${Dark.toUpperCase()} `,
        //                 featureHeader2: "A better way to subtitle",
        //                 featureBody:
        //                     "Lorem ipsum body sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        //                 featureFeatures: [
        //                     {
        //                         iconName: "GlobeAlt",
        //                         title: "Feature title one",
        //                         body:
        //                             "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Scale",
        //                         title: "Feature title two",
        //                         body:
        //                             "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "LightningBolt",
        //                         title: "Feature title three",
        //                         body:
        //                             "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Annotation",
        //                         title: "Feature title four",
        //                         body:
        //                             "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                 ],
        //             },
        //         },

        //         // FEATURES FeatureGridList
        //         {
        //             type: "Feature",
        //             subType: "FeatureGridList",
        //             params: {
        //                 featureTheme: Gray,
        //                 featureHeader1: `GridList ${Gray.toUpperCase()} `,
        //                 featureHeader2: "A better way to subtitle",
        //                 featureBody:
        //                     "Lorem ipsum body sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        //                 featureFeatures: [
        //                     {
        //                         iconName: "GlobeAlt",
        //                         title: "Feature title one",
        //                         body:
        //                             "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Scale",
        //                         title: "Feature title two",
        //                         body:
        //                             "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "LightningBolt",
        //                         title: "Feature title three",
        //                         body:
        //                             "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Annotation",
        //                         title: "Feature title four",
        //                         body:
        //                             "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                 ],
        //             },
        //         },

        //         // FEATURES FeatureCenteredGrid
        //         {
        //             type: "Feature",
        //             subType: "FeatureCenteredGrid",
        //             params: {
        //                 featureTheme: Light,
        //                 featureHeader1: `CenteredGrid ${Light.toUpperCase()} `,
        //                 featureHeader2: "A better way to subtitle",
        //                 featureBody:
        //                     "Lorem ipsum body sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        //                 featureFeatures: [
        //                     {
        //                         iconName: "GlobeAlt",
        //                         title: "Feature title one",
        //                         body:
        //                             "Lorem ipsum, one sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Scale",
        //                         title: "Feature title two",
        //                         body:
        //                             "Lorem ipsum, two sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "LightningBolt",
        //                         title: "Feature title three",
        //                         body:
        //                             "Lorem ipsum, three sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                     {
        //                         iconName: "Annotation",
        //                         title: "Feature title four",
        //                         body:
        //                             "Lorem ipsum, four sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        //                     },
        //                 ],
        //             },
        //         },

        //         // HEROS  HeroSimpleCentered STRONG
        //         {
        //             type: "Hero",
        //             subType: "HeroSimpleCentered",
        //             params: {
        //                 heroTheme: White,
        //                 heroHeader1: `Simple Centered ${White.toUpperCase()} `,
        //                 heroHeader2: "online business",
        //                 heroBody:
        //                     "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        //                 heroCTAPrimary: { title: "Get started", link: "/" },
        //                 heroCTASecondary: { title: "Live demo", link: "/" },
        //                 heroImageSrc:
        //                     "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        //             },
        //         },

        //         // HEROS  HeroWithAngledImage STRONG
        //         {
        //             type: "Hero",
        //             subType: "HeroWithAngledImage",
        //             params: {
        //                 heroTheme: Light,
        //                 heroHeader1: `With Angled Image ${Light.toUpperCase()} `,
        //                 heroHeader2: "online business",
        //                 heroBody:
        //                     "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        //                 heroCTAPrimary: { title: "Get started", link: "/" },
        //                 heroCTASecondary: { title: "Live demo", link: "/" },
        //                 heroImageSrc:
        //                     "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        //             },
        //         },

        //         // HEROS  HeroWithAppScreenshot  STRONG
        //         {
        //             type: "Hero",
        //             subType: "HeroWithAppScreenshot",
        //             params: {
        //                 heroTheme: Dark,
        //                 heroHeader1: `With App Screenshot ${Dark.toUpperCase()} `,
        //                 heroHeader2: "online business",
        //                 heroBody:
        //                     "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        //                 heroCTAPrimary: { title: "Get started", link: "/" },
        //                 heroCTASecondary: { title: "Live demo", link: "/" },
        //                 heroImageSrc:
        //                     "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        //             },
        //         },

        //         // HEROS  HeroWithImage STRONG
        //         {
        //             type: "Hero",
        //             subType: "HeroWithImage",
        //             params: {
        //                 heroTheme: Gray,
        //                 heroHeader1: `With Image ${Gray.toUpperCase()} `,
        //                 heroHeader2: "online business",
        //                 heroBody:
        //                     "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        //                 heroCTAPrimary: { title: "Get started", link: "/" },
        //                 heroCTASecondary: { title: "Live demo", link: "/" },
        //                 heroImageSrc:
        //                     "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        //             },
        //         },
        //     ],
        // },
    ],
    auth: {
        links: [
            {
                iconName: "UserCircle",
                title: "Profile",
                link: "/auth/profile",
            },
            {
                iconName: "Cog",
                title: "Settings",
                link: "/auth/settings",
            },
            {
                iconName: "Bell",
                title: "Notifications",
                link: "/auth/notifications",
            },
        ],
    },
    navBar: {
        style: "Simple",
        quickAction: "New User",
        showNotifications: true,
        links: [
            {
                iconName: "Home",
                title: "Dashboard",
                link: "/home",
            },
            {
                iconName: "Users",
                title: "Admin",
                link: "/citymap",
                roles: ["admin"],
            },
            {
                iconName: "Folder",
                title: "Admin_User",
                link: "/projects",
                roles: ["admin", "user"],
            },
            {
                iconName: "Calendar",
                title: "User",
                link: "/calendar",
                roles: ["user"],
            },
            {
                iconName: "Calendar",
                title: "Star",
                link: "/calendar",
                roles: ["*"],
            },
            {
                iconName: "Eye",
                title: "Expandable",
                children: [
                    {
                        title: "Menu 1",
                        link: "/menu1",
                        roles: ["admin"],
                    },
                    {
                        title: "Menu 2",
                        link: "/menu2",
                        roles: ["admin"],
                    },
                    {
                        title: "Menu 3",
                        link: "/menu3",
                        roles: ["admin"],
                    },
                    {
                        title: "Menu 4",
                        link: "/menu4",
                        roles: ["admin"],
                    },
                ],
            },
        ],
        secondaryLinks: {
            secondaryLinkTitle: "Secondary Menu",
            links: [
                {
                    title: "Secondary Menu 1",
                    link: "/menu1",
                    roles: ["user"],
                },
                {
                    title: "Secondary Menu 2",
                    link: "/menu2",
                    roles: ["admin"],
                },
            ],
        },
    },
};

export default appConfig;
