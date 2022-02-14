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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&family=Roboto:wght@300;400;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main}>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "58%" }}>
              <Image src={logo} alt="VaCiD logo" width={689} height={242} />
              <div style={{ margin: "80px 50px" }}>
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
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: -120,
                  zIndex: 1,
                  marginBottom: -40,
                }}
              >
                <NavigationCard
                  path="/hulp"
                  text="Ik zit ergens mee"
                  color="orange"
                />
                <NavigationCard
                  path="/hulp"
                  text="Ik zoek informatie"
                  color="blue"
                />
              </div>
            </div>
            <div style={{ width: "42%" }}>
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
                  width={1000}
                  height={667}
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
