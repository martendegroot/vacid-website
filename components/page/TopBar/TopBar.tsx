import { ContactButton } from "@/components/content/ContactButton/ContactButton";
import { LocaleSwitcher } from "../LocaleSwitcher/LocaleSwitcher";
import styles from "./TopBar.module.scss";

export const TopBar = ({ pageMapping }: { pageMapping?: any }) => (
  <div className={styles.wrapper}>
    <LocaleSwitcher pageMapping={pageMapping} />
    <div className={styles.divider} />
    <ContactButton />
  </div>
);
