import { Dispatch, SetStateAction } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./QuestionSection.module.scss";

interface Props {
  question: string;
  options: { name: string; text: string }[];
  selected: string | undefined;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const QuestionSection = ({
  question,
  options,
  selected,
  setSelected,
}: Props) => {
  const handleClick = (event: React.SyntheticEvent) => {
    setSelected((event.target as Element).id);
  };

  return (
    <>
      <div style={{ fontWeight: "bold" }}>{question}</div>
      <div className={styles.wrapper}>
        {options.map((option) => (
          <QuestionCard
            key={option.name}
            {...option}
            clickHandler={handleClick}
            selected={option.name === selected}
            faded={!!selected && option.name !== selected}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionSection;
