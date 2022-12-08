import React from "react";
import { Accordion } from "react-bootstrap";
import { Document } from "@contentful/rich-text-types";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IFoldableQuestionFields } from "@/types/generated/contentful";
import styles from "./FoldableQuestion.module.scss";

export const FoldableQuestion = ({
  question,
  answer,
}: IFoldableQuestionFields) => {
  const [richTextAnswer, setRichTextAnswer] = React.useState<Document | null>(
    null
  );
  React.useEffect(() => {
    richTextFromMarkdown(answer).then((text) => setRichTextAnswer(text));
  }, [answer]);

  return (
    <Accordion className={styles.wrapper}>
      <Accordion.Item eventKey={"a"}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>
          {richTextAnswer && documentToReactComponents(richTextAnswer)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
