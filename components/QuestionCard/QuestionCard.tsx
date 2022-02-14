import classnames from "classnames";
import React from "react";
import styles from "./QuestionCard.module.scss";

interface Props {
  name: string;
  text: string;
  selected?: boolean;
  faded?: boolean;
  clickHandler: (e: React.SyntheticEvent) => void;
}

const QuestionCard = ({ name, text, selected, faded, clickHandler }: Props) => (
  <div
    id={name}
    className={classnames(styles.card, {
      [styles.selected]: selected,
      [styles.faded]: faded,
    })}
    onClick={clickHandler}
  >
    <div className={styles.text}>{text}</div>
  </div>
);

export default QuestionCard;
