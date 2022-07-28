/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { Button } from "@Components/TailwindUI/ApplicationUI/Elements/Button";
import { useRequireAuth } from "@Lib/hooks/useRequireAuth";
import { NorthLinkPage } from "@Definitions/Types";
import AuthNav from "./authNav";

const Notifications: NorthLinkPage = () => {
    const [session, authorised] = useRequireAuth();
    if (!session) {
        return <div>Authenticating...</div>;
    }
    if (!authorised) {
        return <div>You don&apoos;t have permission to view this page...</div>;
    }
    return (
        <main className="max-w-7xl mx-5 pb-10 lg:py-12 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                    <AuthNav />
                </aside>

                {/* Notifications */}
                <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                    <section aria-labelledby="payment_details_heading">
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="bg-white py-6 px-4 sm:p-6">
                                    <div>
                                        <h2
                                            id="payment_details_heading"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Notifications
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500">Notifications will appear here</p>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <Button label="Save" size={2} branded iconName="Save" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
};

Notifications.getInitialProps = async () => {
    return { pageTitle: "Notifications" };
};

export default Notifications;
