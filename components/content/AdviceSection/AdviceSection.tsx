import React from "react";
import { Accordion } from "react-bootstrap";
import { useAdvice } from "@/components/context/AdviceContext";
import { ContactForm } from "@/components/content";
import classNames from "classnames";
import { IAdviceFields, IResponse } from "@/types/generated/contentful";
import styles from "./AdviceSection.module.scss";
import { QuestionItem } from "./QuestionItem";
import { Introduction } from "./Introduction";

export const AdviceSection = ({
  title,
  responses,
  contactForm,
}: IAdviceFields) => {
  const [render, setRender] = React.useState(false);
  const [response, setResponse] = React.useState<IResponse | undefined>();

  const [{ subject, timeframe }, _] = useAdvice();

  React.useEffect(() => {
    setRender(false);
    if (!!subject && !!timeframe) {
      const timer = setTimeout(() => {
        const possibleResponse = responses.find(
          ({ fields }) =>
            fields.subject === subject && fields.timeframe === timeframe
        );
        setResponse(possibleResponse);
        setRender(true);
        document.getElementById("advice-section")?.scrollIntoView();
      }, 750);
      return () => clearTimeout(timer);
    } else {
      setRender(false);
    }
  }, [subject, timeframe, responses]);

  if (!response) return null;
  const {
    fields: { introduction, questions },
  } = response;

  return subject && timeframe ? (
    <div
      id="advice-section"
      className={classNames(styles.render, { [styles.show]: render })}
    >
      <h3 className={styles.title}>{title}</h3>
      <Introduction markdown={introduction} />
      <Accordion style={{ margin: "30px 0" }}>
        {questions.map(({ fields }) => (
          <QuestionItem key={fields.question} {...fields} />
        ))}
      </Accordion>

      <ContactForm show={render} includeIntroduction {...contactForm.fields} />
    </div>
  ) : null;
};
