import React from "react";
import { Accordion } from "react-bootstrap";
import { Document } from "@contentful/rich-text-types";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const QuestionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [content, setContent] = React.useState<Document | null>(null);
  React.useEffect(() => {
    richTextFromMarkdown(answer).then((text) => setContent(text));
  }, [answer]);

  return (
    <>
      {content && (
        <Accordion.Item key={question} eventKey={question}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>
            {content && documentToReactComponents(content)}
          </Accordion.Body>
        </Accordion.Item>
      )}
    </>
  );
};
