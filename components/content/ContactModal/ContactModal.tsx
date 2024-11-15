import { Dispatch, ReactNode, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import styles from "./ContactModal.module.scss";
import { WhatsappIcon } from "./WhatsappIcon";
import { Phone } from "lucide-react";
import classNames from "classnames";
import { IContact } from "@/types/generated/contentful";

interface ContactModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  content: IContact;
}

export const ContactModal = ({ show, setShow, content }: ContactModalProps) => {
  const {
    fields: {
      formTitle,
      formIntroduction,
      formLinkingExpression,
      formClosingRemark,
    },
  } = content;

  return (
    <Modal
      centered
      show={show}
      fullscreen={"lg-down"}
      onHide={() => setShow(false)}
      className={styles.modal}
    >
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>{formTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.container}>
        <p>{formIntroduction}</p>
        <CallButton
          label={content.fields.formPhoneButtonLabel}
          number={content.fields.formPhoneNumber}
        />
        <div className={styles.divider}>{formLinkingExpression}</div>
        <WhatsappButton
          label={content.fields.formWhatsappButtonLabel}
          number={content.fields.formWhatsappNumber}
        />
        <p>{formClosingRemark}</p>
      </Modal.Body>
    </Modal>
  );
};

interface ButtonProps {
  label: string;
  number: string;
}

const CallButton = ({ label, number }: ButtonProps) => {
  var clickHandler = () => {
    window.open(`tel:+${number}`, "_blank", "noopener,noreferrer");
  };

  return (
    <BaseButton className={styles.callButton} handler={clickHandler}>
      <Phone strokeWidth={1.5} />
      {label}
    </BaseButton>
  );
};

const WhatsappButton = ({ label, number }: ButtonProps) => {
  const clickHandler = () => {
    window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
  };

  return (
    <BaseButton className={styles.whatsappButton} handler={clickHandler}>
      <WhatsappIcon size={32} /> {label}
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
