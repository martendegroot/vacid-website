import { ContactButton } from "@/components/content/ContactButton/ContactButton";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
import styles from "./TopBar.module.scss";
import { IContact } from "@/types/generated/contentful";

export const TopBar = ({
  contactContent,
  pageMapping,
}: {
  contactContent: IContact;
  pageMapping?: any;
}) => (
  <div className={styles.wrapper}>
    <LocaleSwitcher pageMapping={pageMapping} />
    <div className={styles.divider} />
    <ContactButton content={contactContent} />
  </div>
);
