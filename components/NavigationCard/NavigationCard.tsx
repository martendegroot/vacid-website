import Link from "next/link";
import classnames from "classnames";
import styles from "./NavigationCard.module.scss";

interface Props {
  path?: string;
  label?: string;
  color?: "orange" | "blue";
}

const NavigationCard = ({ path = "", label = "", color = "orange" }: Props) => (
  <Link href={path} passHref>
    <div className={classnames(styles.card, styles[color])}>
      <div className={classnames(styles.label, styles[color])}>{label}</div>
      <div className={classnames(styles.arrow, styles[color])}>{"›"}</div>
    </div>
  </Link>
);

export default NavigationCard;
