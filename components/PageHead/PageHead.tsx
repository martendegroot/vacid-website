import { IPageHead, IPageHeadMeta } from "@/types/generated/contentful";
import Head from "next/head";

interface PageHeadProps {
  pageHeadData: IPageHead;
}

const PageHead = ({ pageHeadData }: PageHeadProps) => {
  const { pageTitle, meta } = pageHeadData.fields;

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

export default PageHead;
