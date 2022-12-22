import React from "react";
import Image from "next/image";
import styles from "./VerinormBanner.module.scss";
import verinormLogo from "@/images/verinorm.png";
import { IVerinormBannerFields } from "@/types/generated/contentful";
import { Document } from "@contentful/rich-text-types";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const VerinormBanner = ({
  title,
  text,
  buttonLabel,
  buttonUrl,
}: IVerinormBannerFields) => {
  const [richText, setRichText] = React.useState<Document | null>(null);
  React.useEffect(() => {
    richTextFromMarkdown(text).then((t) => setRichText(t));
  }, [text]);

  return (
    <div className={styles.promoWrapper}>
      <div className="col-12 col-md-5 col-lg-4">
        <Image
          src={verinormLogo}
          alt="Verinorm logo"
          width={924}
          height={519}
        />
      </div>
      <div
        style={{ flexDirection: "column" }}
        className="col-12 col-md-7 col-lg-8 my-4 my-md-0"
      >
        <h3>{title}</h3>
        {richText && documentToReactComponents(richText)}
        <a
          className="btn btn-outline-dark btn-lg mt-3"
          href={buttonUrl}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};
