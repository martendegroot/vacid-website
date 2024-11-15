import { useState } from "react";
import styles from "./ContactButton.module.scss";
import { Phone } from "lucide-react";
import { ContactModal } from "../ContactModal/ContactModal";
import { IContact } from "@/types/generated/contentful";

export const ContactButton = ({ content }: { content: IContact }) => {
  const [show, setShow] = useState(false);
  const {
    fields: { buttonLabel },
  } = content;

  const handleClick = () => setShow((current) => !current);

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        <Phone size={17} /> {buttonLabel}
      </button>
      <ContactModal show={show} setShow={setShow} content={content} />
    </>
  );
};
