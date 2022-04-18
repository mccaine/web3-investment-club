import React from "react";
import NextHead from "next/head";

import { settings, metaTags, og } from "@utils/settings";

interface Props {
  title?: string;
  description?: string;
}

const Head: React.FC<Props> = ({ title, description }) => {
  return (
    <NextHead>
      <meta name="theme-color" content="#222" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title || settings.title}</title>
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="description" content={description || settings.description} />
      <meta name="image" content={metaTags.image} />
      <meta name="og:site_name" content={og.site_name} />
      <meta name="og:locale" content={og.locale} />
      <meta name="og:url" content={og.url} />
      <meta name="og:type" content={og.type} />
      <meta name="og:title" content={og.title} />
      <meta name="og:description" content={og.description} />
      <meta name="og:image" content={og.image} />
    </NextHead>
  );
};

export default Head;
