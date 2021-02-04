import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>UFILMA - {title}</title>
      <meta name="title" content={`"UFILMA - ${title}"`} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ufilma.com" />
      <meta property="og:title" content={`"UFILMA - ${title}"`} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ufilma.com" />
      <meta property="twitter:title" content={`"UFILMA - ${title}"`} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
