import React from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import { NorthLinkPage } from "@Definitions/Types";
import { Alert } from "@Components/TailwindUI/ApplicationUI/Feedback/Alert";
import { Button } from "@Components/TailwindUI/ApplicationUI/Elements/Button";

interface ErrorMessageProps {
    errorCode: string;
}
const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({ errorCode }) => {
    switch (errorCode) {
        case "Configuration":
            return (
                <Alert theme="red" accentBorder header="Server Error" iconName="XCircle">
                    <div>
                        <div className="my-3">
                            <p>There is a problem with the server configuration.</p>
                        </div>
                    </div>
                </Alert>
            );
        case "AccessDenied":
            return (
                <Alert theme="red" accentBorder header="Access Denied" iconName="XCircle">
                    <div className="my-3">
                        <p>You do not have permission to sign in.</p>
                        <div className="my-3">
                            <Button label="Sign In" size={2} branded iconName="UserAdd" onClick={() => signIn()} />
                        </div>
                    </div>
                </Alert>
            );
        case "Verification":
            return (
                <Alert theme="red" accentBorder header="Unable to sign in" iconName="XCircle">
                    <div className="my-3">The sign in link is no longer valid.</div>
                    <div className="my-3">It may have be used already or it may have expired.</div>
                    <div className="my-3">
                        <Button label="Sign In" size={2} branded iconName="UserAdd" onClick={() => signIn()} />
                    </div>
                </Alert>
            );

        default:
            return (
                <Alert theme="red" accentBorder header="Unknown error" iconName="XCircle">
                    <div className="my-3">{errorCode}</div>
                </Alert>
            );
    }
};

const Error: NorthLinkPage = () => {
    const router = useRouter();
    const errorCode = Array.isArray(router.query.error) ? router.query.error[0] : router.query.error;

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="/static/images/logo_light_narrow.svg" alt="Workflow" />
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Error</h2>
                    <div className="mt-8">
                        <ErrorMessage errorCode={errorCode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

Error.getInitialProps = async (ctx: NextPageContext) => {
    const { res, query } = ctx;
    if (query && res) {
        const errorCode = Array.isArray(query.error) ? query.error[0] : query.error;
        res.writeHead(301, {
            Location: `/auth/signin?error=${errorCode}`,
        });
        res.end();
    }
};

export default Error;
