import { IPageHead, IPageHeadFields } from "@/types/generated/contentful";
import Head from "next/head";

export const PageHead = ({ pageTitle, meta }: IPageHeadFields) => {
  const socialImageMeta = {
    property: "og:image",
    content: "https://www.vacid.nl/images/logo-social.png",
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      {[...meta.map((e) => e.fields), socialImageMeta].map((fields, i) => (
        <meta key={i} {...fields} />
      ))}
    </Head>
  );
};
