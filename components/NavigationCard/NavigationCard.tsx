import Link from "next/link";
import classnames from "classnames";
import styles from "./NavigationCard.module.scss";

interface Props {
  path: string;
  text: string;
  color: "orange" | "blue";
}

const NavigationCard = ({ path, text, color }: Props) => (
  <Link href={path} passHref>
    <div className={classnames(styles.card, styles[color])}>
      <div className={classnames(styles.text, styles[color])}>{text}</div>
      <div className={classnames(styles.arrow, styles[color])}>{"›"}</div>
    </div>
  </Link>
);

export default NavigationCard;
