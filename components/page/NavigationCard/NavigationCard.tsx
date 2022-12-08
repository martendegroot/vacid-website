import Link from "next/link";
import classnames from "classnames";
import styles from "./NavigationCard.module.scss";
import { INavigationCardFields } from "@/types/generated/contentful";

export const NavigationCard = ({
  path,
  label,
  color,
}: INavigationCardFields) => (
  <Link href={path} passHref>
    <div className={classnames(styles.card, styles[color])}>
      <div className={classnames(styles.label, styles[color])}>{label}</div>
      <div className={classnames(styles.arrow, styles[color])}>{"›"}</div>
    </div>
  </Link>
);
