import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Page.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Accordion } from "react-bootstrap";

const Hulp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meer informatie</title>
        <meta name="description" content="Meer informatie" />
      </Head>

      <main id={styles.main}>
        <div className={styles.container}>
          <div style={{ color: "#AAA" }}>
            <span style={{ fontWeight: 600, color: "rgba(102, 204, 255, 1)" }}>
              VaCiD
            </span>{" "}
            | Meer informatie
          </div>
          <h2 className={styles.pageTitle}>Respect staat voorop</h2>
          <div style={{ maxWidth: 600 }}>
            <p>
              In de wereld van partnerdans vind veel contact plaats. Aanraking
              is de norm en dat betekent voor iedereen iets anders. Het komt
              helaas voor dat danspartners dit niet goed afstemmen met elkaar.
              Soms worden zelfs bewust grenzen overschreden.
            </p>
            <Accordion style={{ margin: "30px 0" }}>
              <Accordion.Item eventKey={"a"}>
                <Accordion.Header>Wat doet VaCiD?</Accordion.Header>
                <Accordion.Body>
                  Als organisatie zetten wij ons in om de danswereld een
                  veiligere plek te maken. Dat doen we door dansers, leraren en
                  scholen advies te geven. In noodgevallen weten wij door te
                  verwijzen naar de juiste hulpinstanties. Je kunt altijd bij
                  ons altijd terecht voor een vertrouwelijk gesprek. Dit doen we
                  niet anoniem, zodat we het zwart maken van personen tegen
                  kunnen gaan.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p>
              Respect staat dus voorop, om de integriteit van de dansscene en de
              mensen daarbinnen te beschermen. Vaak beginnen situaties met
              miscommunicatie of uiteenlopende verwachtingen. Daarom proberen we
              niet alleen slachtoffers te helpen met een gesprek, maar ook
              andere dansers voor te lichten. Op die manier hopen we schadelijke
              situaties te voorkomen.
            </p>
            <Accordion style={{ margin: "30px 0" }}>
              <Accordion.Item eventKey={"a"}>
                <Accordion.Header>Blijft het gesprek geheim?</Accordion.Header>
                <Accordion.Body>
                  Wanneer je in gesprek gaat met ons, dan blijft de inhoud
                  daarvan ten alle tijde vertrouwelijk, anoniem en tussen ons.
                  Wij zetten daar uit onszelf ook geen actie op voort. Wij
                  zullen geen morele standaard handhaven of ingrijpen. De enige
                  uitzondering op deze regel is het moment waarop in korte tijd
                  meerdere serieuze klachten over een specifiek individu
                  binnenkomen. In dat geval zullen wij een signalement afgeven
                  aan de dansscholen met een beschrijving van het gedrag van dat
                  individu, om de dansgemeenschap te beschermen. Maar jouw
                  persoonlijke details zullen daar nooit in worden gedeeld.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <ContactForm show />
        </div>
      </main>
    </div>
  );
};

export default Hulp;
