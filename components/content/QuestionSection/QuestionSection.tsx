import { IQuestionSectionFields } from "@/types/generated/contentful";
import { OptionCard } from "./OptionCard/OptionCard";
import styles from "./QuestionSection.module.scss";

type Options = {
  id: "A" | "B";
  text: string;
};

export const QuestionSection = ({
  topic,
  question,
  optionA,
  optionB,
}: IQuestionSectionFields) => {
  const options: Options[] = [
    { id: "A", text: optionA },
    { id: "B", text: optionB },
  ];

  return (
    <>
      <div style={{ fontWeight: "bold" }}>{question}</div>
      <div className={styles.wrapper}>
        {options.map(({ id, text }) => (
          <OptionCard key={id} id={id} topic={topic} text={text} />
        ))}
      </div>
    </>
  );
};
