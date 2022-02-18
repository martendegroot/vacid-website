import React from "react";
import axios from "axios";
import classNames from "classnames";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "./ContactForm.module.scss";
import { compileString } from "sass";

interface Props {
  show: boolean;
  includeIntroduction?: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({ show, includeIntroduction }: Props) => {
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
      <h4
        style={{
          marginTop: 50,
          marginBottom: 10,
          marginLeft: -10,
          fontSize: 24,
          fontWeight: 500,
          color: "#666",
          fontFamily: `"Roboto", sans-serif`,
        }}
      >
        Contact opnemen
      </h4>
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
          Dankjewel voor het insturen van je bericht. Wij zorgen dat je hoe dan
          ook binnen 7 dagen een antwoord van ons hebt ontvangen.
        </div>
      ) : (
        <>
          {sendingFailed && (
            <p style={{ fontWeight: 900 }}>Wacht even! Er ging iets fout.</p>
          )}
          {includeIntroduction && (
            <>
              <p>
                Wij staan voor je klaar om je te helpen. Als je contact opneemt
                met ons dan komt één van onze vertrouwenspersonen binnen 7 dagen
                bij je terug. Daarna kijken we samen wat de beste vervolgstappen
                zijn in jouw situatie.
              </p>
              <p>
                Deze informatie blijft altijd van jou. Daarmee bedoelen we jouw
                verhaal niet naar komt of gedeeld zal worden zonder jouw
                toestemming. Wij ondernemen dan ook geen actie zonder jou daar
                eerst in te betrekken.
              </p>
            </>
          )}

          <Form
            style={{ marginTop: 30, paddingBottom: 50 }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Naam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Voer je naam in"
                required
              />
              <Form.Control.Feedback>
                Dankjewel voor het invullen
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Het is nodig dat je je naam invult.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Voer je email in"
                required
              />
              <Form.Control.Feedback>
                Via dit adres nemen we contact met je op.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                We hebben een geldig emailadres van je nodig.
              </Form.Control.Feedback>
            </Form.Group>
            <FloatingLabel
              controlId="message"
              label="Bericht"
              style={{ margin: "30px 0" }}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ minHeight: 200 }}
                required
              />
              <Form.Control.Feedback>
                Je bericht staat genoteerd.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Vergeet niet het bericht in te vullen.
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button variant="outline-secondary" type="submit">
              Bericht versturen
            </Button>
            {sendingFailed && (
              <p
                style={{
                  fontWeight: 900,
                  marginTop: 30,
                }}
              >
                Het verzenden is niet gelukt. Zou je het nog eens kunnen
                proberen? Wellicht op een later moment?
              </p>
            )}
          </Form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
