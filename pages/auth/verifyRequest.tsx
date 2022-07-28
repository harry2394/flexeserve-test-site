import React from "react";
import { Alert } from "@Components/TailwindUI/ApplicationUI/Feedback/Alert";
import { NorthLinkPage } from "@Definitions/Types";

const VerifyRequest: NorthLinkPage = () => {
    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="/static/images/logo_light_narrow.svg" alt="Workflow" />
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white text-center py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Check your email</h2>
                    <div className="py-8">
                        <Alert theme="green" accentBorder iconName="CheckCircle">
                            <div>A sign in link has been sent to your email address.</div>
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    );
};

VerifyRequest.getInitialProps = async () => {
    return { pageTitle: "Verify Email Address" };
};

export default VerifyRequest;
