import Image from "next/image";
import styles from "./VerinormBanner.module.scss";
import verinormLogo from "@/images/verinorm.png";

export const VerinormBanner = () => (
  <div className={styles.promoWrapper}>
    <div className="col-12 col-md-5 col-lg-4">
      <Image src={verinormLogo} alt="Verinorm logo" width={924} height={519} />
    </div>
    <div
      style={{ flexDirection: "column" }}
      className="col-12 col-md-7 col-lg-8 my-4 my-md-0"
    >
      <h3>Help onderzoek met jouw ervaringen</h3>
      <p>
        Vanuit de overheid is een onderzoek gestart naar grensoverschrijdend
        gedrag binnen de danswereld. Jouw ervaringen zijn onmisbaar om een goed
        beeld te krijgen van de danswereld. Dus ook als je niets met
        grensoverschrijdend gedrag te maken hebt gehad. Dit onderzoek wordt
        geleid door{" "}
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
);
