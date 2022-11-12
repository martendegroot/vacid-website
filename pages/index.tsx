import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.scss";
import logo from "@/images/logo2.png";
import verinormLogo from "@/images/verinorm.png";
import dancingPeople from "@/images/dancing-people3.jpg";
import NavigationCard from "@/components/NavigationCard/NavigationCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Violence and Complaints in Dance | VaCiD</title>
        <meta
          name="description"
          content={`Meldpunt Violence and Complaints in Dance is in het leven geroepen om dansen vrij en vooral veilig
                  te maken. Wij kunnen ondersteunen in de afhandeling van vragen of je doorverwijzen naar de juiste
                  instantie.`}
        />
        <meta
          property="og:title"
          content="Violence and Complaints in Dance | VaCiD"
        />
        <meta
          property="og:description"
          content="VaCiD is in het leven geroepen om dansen vrij en vooral veilig
          te maken. Als meldpunt voor grensoverschrijdend gedrag kun je
          bij ons terecht met vragen over de danswereld."
        />
        <meta
          property="og:image"
          content="https://www.vacid.nl/images/logo-social.png"
        />
      </Head>

      <main id={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Image src={logo} alt="VaCiD logo" width={689} height={242} />
              <div className={styles.intro}>
                <h2 style={{ marginBottom: 30, color: "#666" }}>
                  Violence and Complaints in Dance
                </h2>
                <p>
                  VaCiD is in het leven geroepen om dansen vrij en vooral veilig
                  te maken. Als meldpunt voor grensoverschrijdend gedrag kun je
                  bij ons terecht met vragen over de danswereld. Wij kunnen
                  ondersteunen in de afhandeling daarvan of je doorverwijzen
                  naar de juiste instantie.
                </p>
              </div>
              <div className={styles.cardContainer}>
                <NavigationCard
                  path="/hulp"
                  text="Ik zit ergens mee"
                  color="orange"
                />
                <NavigationCard
                  path="/informatie"
                  text="Meer informatie"
                  color="blue"
                />
              </div>
            </div>
            <div className={styles.imageContainer}>
              <div
                style={{
                  padding: "60px 0 0 40px",
                  position: "relative",
                  height: "100%",
                }}
              >
                <Image
                  src={dancingPeople}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className={styles.promoWrapper}>
            <div className="col-12 col-md-5 col-lg-4">
              <Image
                src={verinormLogo}
                alt="Verinorm logo"
                width={924}
                height={519}
              />
            </div>
            <div
              style={{ flexDirection: "column" }}
              className="col-12 col-md-7 col-lg-8 my-4 my-md-0"
            >
              <h3>Help onderzoek met jouw ervaringen</h3>
              <p>
                Vanuit de overheid is een onderzoek gestart naar
                grensoverschrijdend gedrag binnen de danswereld. Jouw ervaringen
                zijn onmisbaar om een goed beeld te krijgen van de danswereld.
                Dus ook als je niets met grensoverschrijdend gedrag te maken
                hebt gehad. Dit onderzoek wordt geleid door{" "}
                <a
                  href="https://verinorm.nl/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Verinorm
                </a>
                . Invullen van de vragenlijst duurt maar ongeveer 5 minuten.
              </p>
              <a
                className="btn btn-outline-dark btn-lg mt-3"
                href="https://verinorm.qualtrics.com/jfe/form/SV_9zE0NNqrkzZEDMW?Q_Language=NL"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Deelnemen aan dit onderzoek
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
