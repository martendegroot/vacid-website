import React from "react";
import { Document } from "@contentful/rich-text-types";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Introduction = ({ markdown }: { markdown: string }) => {
  const [content, setContent] = React.useState<Document | null>(null);
  React.useEffect(() => {
    richTextFromMarkdown(markdown).then((text) => setContent(text));
  }, [markdown]);

  return <>{content && documentToReactComponents(content)}</>;
};
