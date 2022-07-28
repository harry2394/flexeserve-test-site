import React from "react";
import { withTranslation } from "@Server/i18n";
import { HeroWithImage } from "@Components/TailwindUI/Marketing/PageSections/Hero/HeroWithImage";
import { Layout } from "@Components/Layout";
import { HeadingSimple } from "@Components/TailwindUI/ApplicationUI/Headings/HeadingSimple";
import { NorthLinkPage } from "@Definitions/Types";
import { customAlert } from "@Lib/custom/Interactions";
import { logger } from "@Lib/custom/logger";

logger.info("Use this for logging");

const Home: NorthLinkPage = () => {
    return (
        <main>
            <HeadingSimple
                theme="white"
                layoutClass="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"
                heading="Dashboard"
                title="Dash Title"
                breadcrumbs={[
                    { title: "Breadcrumb One", link: "#link1" },
                    { title: "Breadcrumb Two", link: "#link2" },
                ]}
                primaryAction={{
                    title: "Click",
                    actionHandler: () => {
                        customAlert("Click!");
                    },
                }}
                secondaryAction={{
                    title: "Press",
                    actionHandler: () => {
                        customAlert("Press!");
                    },
                }}
                metadata={[
                    { iconName: "Briefcase", title: "Part-time" },
                    { iconName: "LocationMarker", title: "Local" },
                    { iconName: "CurrencyDollar", title: "£50-70k" },
                    { iconName: "Calendar", title: "Closing on April 15th" },
                ]}
            />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-8 sm:px-0">
                    <HeroWithImage
                        heroTheme="white"
                        heroHeader1="Data to enrich your "
                        heroHeader2="online business"
                        heroBody="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                        heroCTAPrimary={{ title: "Get started", link: "/" }}
                        heroCTASecondary={{ title: "Live demo", link: "/" }}
                        heroImageSrc="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    />
                </div>
            </div>
        </main>
    );
};

// Use default layout from appConfig.
// Override by importing a layout from @Components/TailwindUI/ApplicationUI/ApplicationShells
Home.Layout = Layout;

Home.getInitialProps = async () => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Home);
