import { IHeaderFields } from "@/types/generated/contentful";
import styles from "./Header.module.scss";

export const Header = ({
  brandName,
  pageName,
  pageTitle,
  pageLead,
}: IHeaderFields) => (
  <>
    <div className={styles.head}>
      <span className={styles.brandName}>{brandName}</span> | {pageName}
    </div>
    <h2 className={styles.title}>{pageTitle}</h2>

    <div className={styles.lead}>
      <p>{pageLead}</p>
    </div>
  </>
);
