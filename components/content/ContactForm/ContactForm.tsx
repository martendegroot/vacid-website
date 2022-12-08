import React from "react";
import axios from "axios";
import classNames from "classnames";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "./ContactForm.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContactFormFields } from "@/types/generated/contentful";

interface ContactFormProps {
  show: boolean;
  includeIntroduction?: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = ({
  show,
  includeIntroduction,
  ...content
}: ContactFormProps & IContactFormFields) => {
  const [render, setRender] = React.useState(false);
  const [formHasBeenSent, setFormHasBeenSent] = React.useState(false);
  const [sendingFailed, setSendingFailed] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      const formData = {
        name: form.querySelector("input#name").value,
        email: form.querySelector("input#email").value,
        message: form.querySelector("textarea#message").value,
      };
      submitForm(formData);
    }

    setValidated(true);
  };

  const submitForm = (formData: FormData) => {
    setTimeout(() => {
      sendForm(formData);
      setRender(false);
      setTimeout(() => {
        setFormHasBeenSent(true);
        setRender(true);
      }, 1500);
    }, 500);
  };

  const sendForm = (formData: FormData) => {
    axios.post("/api/email", formData).catch(() => {
      setSendingFailed(true);
    });
  };

  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setRender(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setRender(false);
    }
  }, [show]);

  return (
    <div className={classNames(styles.render, { [styles.show]: render })}>
      <h4 className={styles.title}>{content.title}</h4>
      <div
        style={{
          height: 3,
          width: "65%",
          backgroundColor: "rgba(13, 112, 161, 0.2)",
          marginBottom: 25,
        }}
      />
      {formHasBeenSent && !sendingFailed ? (
        <div style={{ marginTop: 30, paddingBottom: 150 }}>
          {content.feedbackSent}
        </div>
      ) : (
        <>
          {sendingFailed && (
            <p style={{ fontWeight: 900 }}>{content.sentFailedNotice}</p>
          )}
          {includeIntroduction && (
            <>{documentToReactComponents(content.introduction)}</>
          )}

          <Form
            style={{ marginTop: 30, paddingBottom: 50 }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{content.nameLabel}</Form.Label>
              <Form.Control
                type="text"
                placeholder={content.namePlaceholder}
                required
              />
              <Form.Control.Feedback>
                {content.emailFeedback}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {content.emailFeedbackInvalid}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>{content.emailLabel}</Form.Label>
              <Form.Control
                type="email"
                placeholder={content.emailPlaceholder}
                required
              />
              <Form.Control.Feedback>
                {content.emailFeedback}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {content.emailFeedbackInvalid}
              </Form.Control.Feedback>
            </Form.Group>
            <FloatingLabel
              controlId="message"
              label={content.messageLabel}
              style={{ margin: "30px 0" }}
            >
              <Form.Control
                as="textarea"
                placeholder={content.messagePlaceholder}
                style={{ minHeight: 200 }}
                required
              />
              <Form.Control.Feedback>
                {content.messageFeedback}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {content.messageFeedbackInvalid}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button variant="outline-secondary" type="submit">
              {content.buttonLabel}
            </Button>
            {sendingFailed && (
              <p
                style={{
                  fontWeight: 900,
                  marginTop: 30,
                }}
              >
                {content.feedbackSentFailed}
              </p>
            )}
          </Form>
        </>
      )}
    </div>
  );
};
