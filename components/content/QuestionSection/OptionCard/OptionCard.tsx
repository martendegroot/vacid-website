import React from "react";
import classnames from "classnames";
import { useAdvice } from "@/components/context/AdviceContext";
import styles from "./OptionCard.module.scss";

interface Props {
  id: "A" | "B";
  topic: "subject" | "timeframe";
  text: string;
}

export const OptionCard = ({ id, topic, text }: Props) => {
  const [advice, setAdvice] = useAdvice();

  const options = {
    subject: {
      A: "self",
      B: "other",
    },
    timeframe: {
      A: "recent",
      B: "past",
    },
  };
  const option = options[topic][id];

  const handleClick = (event: React.SyntheticEvent) => {
    setAdvice({ ...advice, [topic]: (event.target as Element).id });
  };

  const selected = option === advice[topic];
  const faded = !!advice[topic] && option !== advice[topic];

  return (
    <div
      id={option}
      className={classnames(styles.card, {
        [styles.selected]: selected,
        [styles.faded]: faded,
      })}
      onClick={handleClick}
    >
      <div className={styles.text}>{text}</div>
    </div>
  );
};
