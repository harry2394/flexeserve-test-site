import { NavigationLink } from "../Types";

type PageSectionTypes = "CTA" | "Feature" | "Hero" | "Footer";

type SubTypesHero = "HeroSimpleCentered" | "HeroWithAngledImage" | "HeroWithAppScreenshot" | "HeroWithImage";

type SubTypesCTA = "CTASimpleCentered" | "CTASimpleJustified" | "CTASimpleStacked" | "CTASplitWithImage";

type SubTypesFooter = "FooterSimpleCentered" | "FooterSocialLinksOnly";

type SubTypesFeature =
    | "FeatureCenteredGrid"
    | "FeatureGridList"
    | "FeatureList"
    | "FeatureOffsetGrid"
    | "FeatureSimpleColumn";

export type StaticPageThemes = "white" | "gray" | "light" | "dark";

type PageSectionSubTypes = SubTypesHero | SubTypesCTA | SubTypesFooter | SubTypesFeature;

export interface SocialLink {
    socialNetwork: string;
    link: string;
}

type StaticPageCTA = { title: string; link: string };

export interface StaticPageSection {
    type: PageSectionTypes;
    subType: PageSectionSubTypes;
    params: ICTAParams | IFeatureParams | IHeroParams | IFooterParams;
    paramsStrong?: ICTAParams | IFeatureParams | IHeroParams | IFooterParams;
}

export interface StaticPage {
    slug: string;
    title: string;
    sections: StaticPageSection[];
}

export interface PageProps {
    staticPage: StaticPage;
}

export interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: StaticPageThemes;
    iconName?: string;
    title?: string;
    body?: string;
}

export interface Action {
    title: string;
    actionHandler(): void;
}

export interface HeaderMetadata {
    iconName: string;
    title: string;
}
export interface HeadingProps {
    theme: StaticPageThemes;
    heading?: string;
    title?: string;
    primaryAction?: Action;
    secondaryAction?: Action;
    breadcrumbs?: NavigationLink[];
    metadata?: HeaderMetadata[];
    layoutClass?: string;
}

export interface ICTAParams extends React.HTMLAttributes<HTMLDivElement> {
    ctaTheme: StaticPageThemes;
    ctaHeader1: string;
    ctaHeader2: string;
    ctaBody: string | "";
    ctaCTAPrimary: NavigationLink;
    ctaCTASecondary: NavigationLink;
    ctaImageSrc: string | "";
}

export interface IFeatureParams extends React.HTMLAttributes<HTMLDivElement> {
    featureTheme: StaticPageThemes;
    featureHeader1: string;
    featureHeader2: string;
    featureBody: string;
    featureFeatures: FeatureProps[];
}
export interface IHeroParams extends React.HTMLAttributes<HTMLDivElement> {
    heroTheme: StaticPageThemes;
    heroHeader1: string;
    heroHeader2: string | "";
    heroBody: string;
    heroCTAPrimary: StaticPageCTA;
    heroCTASecondary: StaticPageCTA;
    heroImageSrc: string;
}
export interface IFooterParams extends React.HTMLAttributes<HTMLDivElement> {
    footerTheme: StaticPageThemes;
    footerCopyrightMessage: string;
    footerSocialLinks: SocialLink[];
    footerLinks: NavigationLink[];
}
