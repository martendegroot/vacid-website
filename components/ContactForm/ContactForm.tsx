import React from "react";
import axios from "axios";
import classNames from "classnames";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "./ContactForm.module.scss";

interface Props {
  show: boolean;
}

const ContactForm = ({ show }: Props) => {
  const [render, setRender] = React.useState(false);

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
          marginTop: 45,
          marginBottom: 30,
          marginLeft: -10,
          fontSize: 24,
          fontWeight: 500,
          color: "#666",
          fontFamily: `"Roboto", sans-serif`,
        }}
      >
        Contact opnemen
      </h4>
      <p>
        Wij staan voor je klaar om je te helpen. Als je contact opneemt met ons
        dan komt één van onze vertrouwenspersonen binnen 7 dagen bij je terug.
        Daarna kijken we samen wat de beste vervolgstappen zijn in jouw
        situatie.
      </p>
      <p>
        Deze informatie blijft altijd van jou. Daarmee bedoelen we jouw verhaal
        niet naar komt of gedeeld zal worden zonder jouw toestemming. Wij
        ondernemen dan ook geen actie zonder jou daar eerst in te betrekken.
      </p>
      <Form style={{ marginTop: 20, paddingBottom: 150 }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Naam</Form.Label>
          <Form.Control type="text" placeholder="Voer je naam in" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Voer je email in" />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Bericht"
          style={{ margin: "30px 0" }}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ minHeight: 200 }}
          />
        </FloatingLabel>
        <Button
          variant="outline-secondary"
          type="submit"
          onClick={(e) => {
            axios
              .post("/api/email", {
                firstName: "Fred",
                lastName: "Flintstone",
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          Bericht versturen
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
