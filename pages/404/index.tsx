import React from "react";
import { withTranslation } from "@Server/i18n";
import { HeadingSimple } from "@Components/TailwindUI/ApplicationUI/Headings/HeadingSimple";
import { NorthLinkPage } from "@Definitions/Types";

const Error404: NorthLinkPage = () => {
    return (
        <main>
            <HeadingSimple theme="white" heading="Error" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-8 sm:px-0">Page not found</div>
            </div>
        </main>
    );
};

export default withTranslation("common")(Error404);
