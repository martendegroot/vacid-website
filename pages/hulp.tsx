import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Page.module.scss";
import QuestionSection from "@/components/QuestionSection/QuestionSection";
import AdviceSection from "@/components/AdviceSection/AdviceSection";

const Hulp: NextPage = () => {
  const [subject, setSubject] = React.useState<string | undefined>();
  const [timeframe, setTimeframe] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (subject && timeframe) {
      document.getElementById("advice-section")?.scrollIntoView();
    }
  }, [subject, timeframe]);

  return (
    <div>
      <Head>
        <title>Ik zit ergens mee | VaCiD</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main id={styles.main}>
        <div className={styles.container}>
          <div style={{ color: "#AAA" }}>
            <span style={{ fontWeight: 600, color: "rgba(102, 204, 255, 1)" }}>
              VaCiD
            </span>{" "}
            | Ik zit ergens mee
          </div>
          <h2 className={styles.pageTitle}>Wat goed dat je hier bent</h2>
          <div style={{ maxWidth: 600, marginBottom: 40 }}>
            Wij helpen je graag verder in de situatie waar je mee zit. Om je
            beter te begrijpen hebben we hieronder twee vragen voor je.
          </div>
          <QuestionSection
            question={"1. Over wie gaat het?"}
            options={[
              { text: "Het gaat over mijzelf", name: "self" },
              { text: "Ik zag iets gebeuren", name: "other" },
            ]}
            selected={subject}
            setSelected={setSubject}
          />
          <QuestionSection
            question={"2. Hoe kort geleden is dit gebeurd?"}
            options={[
              { text: "Minder dan 7 dagen geleden", name: "recent" },
              { text: "Meer dan 7 dagen geleden", name: "past" },
            ]}
            selected={timeframe}
            setSelected={setTimeframe}
          />

          {subject && timeframe && (
            <AdviceSection
              subject={subject as "self" | "other"}
              timeframe={timeframe as "recent" | "past"}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Hulp;
