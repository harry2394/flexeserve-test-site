/* eslint-disable react/no-array-index-key */
import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Section } from "@Components/StaticPage/Section";
import { NorthLinkPage } from "@Definitions/Types";
import appConfig from "../appConfig";
import { PageProps } from "../src/Definitions/UI/Types";

const Page: NorthLinkPage = (props: PageProps) => {
    const { staticPage } = props;
    return (
        <>
            <Head>
                <title>{staticPage.title}</title>
            </Head>
            {staticPage.sections && staticPage.sections.map((section, i) => <Section key={i} {...section} />)}
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = appConfig.staticPages || [];
    const paths = pages.map(page => {
        const slug = page.slug.split("/").slice(1);
        return { params: { slug } };
    });
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pages = appConfig.staticPages || [];
    if (params) {
        const slug = params.slug as string[];
        const currentPath = `/${slug.join("/")}`;
        const staticPage = pages.find(page => page.slug === currentPath);
        return { props: { staticPage } };
    }
    return { props: { notfound: true } };
};

export default Page;
