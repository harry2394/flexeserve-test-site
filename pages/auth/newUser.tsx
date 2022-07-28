import { NorthLinkPage } from "@Definitions/Types";
import React from "react";

const NewUser: NorthLinkPage = () => {
    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="/static/images/logo_light_narrow.svg" alt="Workflow" />
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white text-center py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome</h2>
                    <div className="py-8">Thank you for signing up, you are now logged in</div>
                </div>
            </div>
        </div>
    );
};

NewUser.getInitialProps = async () => {
    return { pageTitle: "Welcome" };
};

export default NewUser;
