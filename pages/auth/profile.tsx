/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Session } from "next-auth/client";
import { HeroIcon } from "@Components/HeroIcon";
import { useRequireAuth } from "@Lib/hooks/useRequireAuth";
import { ExtendedUser, NorthLinkPage } from "@Definitions/Types";
import ProfileImage from "@Components/TailwindUI/ApplicationUI/Elements/ProfileImage";
import AuthNav from "./authNav";

const Profile: NorthLinkPage = () => {
    const [session, authorised] = useRequireAuth();

    if (!session) {
        return <div>Authenticating...</div>;
    }
    if (!authorised) {
        return <div>You don&apos;t have permission to view this page...</div>;
    }

    const userObject = (session as Session)?.user as ExtendedUser;

    return (
        <main className="max-w-7xl mx-5 pb-10 lg:py-12 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                    <AuthNav />
                </aside>

                {/* Profile */}
                <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                    <div>
                        <div className="bg-primary-600 h-16 w-full object-cover lg:h-24" />
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                <div className="flex">
                                    <div className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32">
                                        <ProfileImage
                                            session={session as Session}
                                            className="h-24 w-24 sm:h-32 sm:w-32 rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                    <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                                        <h1 className="text-2xl font-bold text-gray-900 truncate">{userObject.name}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 truncate">{userObject.name}</h1>
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:px-0 sm:py-0">
                            <dl className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                                <div className="sm:flex sm:px-6 sm:py-5">
                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                        Email address
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                        {userObject.email}
                                    </dd>
                                </div>
                                <div className="sm:flex sm:px-6 sm:py-5">
                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                        Role(s)
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                        {userObject.roles &&
                                            userObject.roles.map(role => (
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <div className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                                                        <HeroIcon iconName="UserGroup" size={20} />
                                                    </div>
                                                    {role}
                                                </div>
                                            ))}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

Profile.getInitialProps = async () => {
    return { pageTitle: "Profile" };
};

export default Profile;
