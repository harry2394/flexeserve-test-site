// #region Global Imports
import * as React from "react";
import { NextPage, NextPageContext } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
import { HeadingSimple } from "@Components/TailwindUI/ApplicationUI/Headings/HeadingSimple";
// #endregion Interface Imports
const Error: NextPage<IErrorPage["IProps"], IErrorPage["InitialProps"]> = ({ statusCode }) => {
    return (
        <main>
            <HeadingSimple theme="white" heading="Error" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-8 sm:px-0">{statusCode}</div>
            </div>
        </main>
    );
};

Error.getInitialProps = async (ctx: NextPageContext) => {
    const { res, err } = ctx;
    let statusCode;

    if (res) {
        ({ statusCode } = res);
    } else if (err) {
        ({ statusCode } = err);
    }

    return {
        namespacesRequired: ["common"],
        statusCode,
    };
};

export default withTranslation("common")(Error);
