import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "@/images/logo2.png";
import dancingPeople from "@/images/dancing-people2.jpg";
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
                  te maken. Als meldpunt voor grensoverschrijdend kun je bij ons
                  terecht met vragen over de danswereld. Wij kunnen ondersteunen
                  in de afhandeling daarvan of je doorverwijzen naar de juiste
                  instantie.
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
                  text="Ik zoek informatie"
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
        </div>
      </main>
    </div>
  );
};

export default Home;
