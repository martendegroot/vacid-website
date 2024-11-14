import { Dispatch, ReactNode, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import styles from "./ContactModal.module.scss";
import { WhatsappIcon } from "./WhatsappIcon";
import { Phone } from "lucide-react";
import classNames from "classnames";

interface ContactModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal = ({ show, setShow }: ContactModalProps) => (
  <Modal
    centered
    show={show}
    fullscreen={"lg-down"}
    onHide={() => setShow(false)}
    className={styles.modal}
  >
    <Modal.Header closeButton>
      <Modal.Title className={styles.title}>
        Prefer to reach out directly?
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className={styles.container}>
      <p>
        For a short inquiry and urgent questions you can reach out to us
        directly through the following options:
      </p>
      <CallButton />
      <div className={styles.divider}>or</div>
      <WhatsappButton />
      <p>
        Both options are available
        <br /> between 9:00 AM and 9:00 PM.
      </p>
    </Modal.Body>
  </Modal>
);

const CallButton = () => {
  var clickHandler = () => {
    window.open("tel:+<phone>", "_blank", "noopener,noreferrer");
  };

  return (
    <BaseButton className={styles.callButton} handler={clickHandler}>
      <Phone strokeWidth={1.5} />
      Phone
    </BaseButton>
  );
};

const WhatsappButton = () => {
  const clickHandler = () => {
    window.open("https://wa.me/<phone>", "_blank", "noopener,noreferrer");
  };

  return (
    <BaseButton className={styles.whatsappButton} handler={clickHandler}>
      <WhatsappIcon size={32} /> Whatsapp
    </BaseButton>
  );
};

const BaseButton = ({
  children,
  className,
  handler,
}: {
  children: ReactNode;
  className: string;
  handler: () => void;
}) => {
  const clickHandler = () => {
    handler();
  };

  return (
    <button
      onClick={clickHandler}
      className={classNames(styles.baseButton, className)}
    >
      {children}
    </button>
  );
};
