import { useState } from "react";
import styles from "./ContactButton.module.scss";
import { Phone } from "lucide-react";
import { ContactModal } from "../ContactModal/ContactModal";

export const ContactButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow((current) => !current);

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        <Phone size={17} /> contact
      </button>
      <ContactModal show={show} setShow={setShow} />
    </>
  );
};
