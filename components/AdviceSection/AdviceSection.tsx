import classNames from "classnames";
import React from "react";
import { Accordion } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./AdviceSection.module.scss";

interface Props {
  subject: "self" | "other";
  timeframe: "recent" | "past";
}

interface Texts {
  self: Timeframe;
  other: Timeframe;
}

interface Timeframe {
  recent: Content;
  past: Content;
}

interface Content {
  intro: JSX.Element;
  questions: Question[];
}

interface Question {
  question: string;
  answer: JSX.Element;
}

const texts: Texts = {
  self: {
    recent: {
      intro: (
        <p>
          Omdat je situatie zich kort geleden heeft afgespeeld kunnen
          professionele hulpdiensten jou met voorrang helpen. Als zich een
          heftige gebeurtenis heeft afgespeeld, dan kun je direct met hen
          contact opnemen. Achteraf horen wij graag alsnog van je verhaal, zodat
          we er binnen de danswereld rekening mee kunnen houden.
        </p>
      ),
      questions: [
        {
          question: "Professionele hulp bij seksueel overschrijdend gedrag",
          answer: (
            <>
              <p>
                Als het gaat om seksueel overschrijdend gedrag, dan raden wij
                aan om te rade te gaan bij het Centrum Seksueel Geweld. Zij
                kunnen geheel vrijblijvend en vertrouwelijk advies leveren bij
                jouw situatie. Ook geven zij op hun website al veel bruikbare
                voorlichting om seksueel overschrijdend gedrag beter te kunnen
                herkennen.
              </p>
              <p>
                <a
                  href="https://centrumseksueelgeweld.nl/"
                  rel="noopener noreferrer nofollow"
                >
                  &#8250; Klik hier om naar de website van CSG te gaan
                </a>
              </p>
              <p>
                Twijfel niet in het geval van fysiek seksueel geweld en neem
                direct contact op met de politie. Zij hebben een speciale
                afdeling, de zedenpolitie, die speciaal is ingericht om je te
                ondersteunen.
              </p>
              <p>
                Je kunt hiervoor de politie bellen op 0900-8844 en vragen naar
                de afdeling zedendelicten.
              </p>
              <p>
                Het is aan jou of je rechtstreeks contact wil opnemen met deze
                partijen. Wij waarderen het ontzettend als je bij ons melding
                wil doen van je klacht, zodat wij beter begrijpen wat er speelt.
                Zo proberen wij volgende situaties te voorkomen en ook andere
                dansers te beschermen. Jouw melding speelt daar een cruciale rol
                in.
              </p>
            </>
          ),
        },
        {
          question: "Neem bij twijfel altijd contact op",
          answer: (
            <p>
              Slachtoffers blijven vaak met een schuldgevoel zitten na een
              vervelende situatie. Het is daarom belangrijk voor het
              verwerkingsproces om er met een vertrouwd persoon over te praten.
              Je kan altijd bij ons terecht voor een oriënterend gesprek en wij
              zullen daar van onze kant nooit iets mee doen voordat jij daar
              toestemming voor geeft.
            </p>
          ),
        },
        {
          question: "Hoe zit het met geheimhouding?",
          answer: (
            <>
              <p>
                Onze vertrouwenspersonen werken onder geheimhoudingsplicht.
                Mocht je het toch fijner vinden om iemand buiten de danswereld
                te spreken over gevoelige en persoonlijke gebeurtenissen, dan
                kun je ook direct contact opnemen met één van de aangesloten
                hulporganisaties.
              </p>
              <p>
                Wij horen uiteindelijk graag je verhaal, zodat we je ervaring
                als signalement kunnen gebruiken om een beter beleid te vormen
                in de danswereld. Met jouw melding maken we de dansvloer
                veiliger en leuker voor iedereen.
              </p>
            </>
          ),
        },
        {
          question: "Kan ik mijn klacht ook anoniem indienen?",
          answer: (
            <>
              <p>
                Nee. Om zuiver op te kunnen handelen bij misstanden vinden wij
                het belangrijk dat dit niet anoniem gebeurt. Dat maakt ons
                minder kwetsbaar voor smaad en laster.
              </p>
              <p>
                Al je gegevens blijven wel ten alle tijde beschermd bij ons. Dat
                houdt in dat wij de gegevens over je melding nooit met derden
                zullen delen als jij dat niet wil.
              </p>
            </>
          ),
        },
      ],
    },
    past: {
      intro: (
        <p>
          Je zet al een belangrijke stap door contact op te nemen. Praten over
          de situatie die je mee hebt gemaakt kan jezelf en anderen helpen. Het
          is nooit te vroeg of te laat om daarmee te beginnen.
        </p>
      ),
      questions: [
        {
          question: "Ik durf er met niemand over te praten",
          answer: (
            <p>
              De informatie die je met ons deelt is strikt vertrouwelijk. De
              persoon met wie jij contact krijgt werkt onder
              geheimhoudingsplicht. Het is heel normaal om je zorgen te hebben
              dat gevoelige informatie naar buiten komt zonder dat je dat wil.
              Wij zijn erop ingesteld om dat te voorkomen, zodat jij op een
              veilige manier met iemand over de gebeurtenis kan praten.
            </p>
          ),
        },
        {
          question:
            "Dit is al heel lang geleden, heeft het zin om erover te praten?",
          answer: (
            <p>
              Ja, zeker! Het kan jou zelf helpen om de gebeurtenis beter te
              verwerken. Daarnaast is het belangrijk voor de danswereld om te
              weten wat er is gebeurd. Daar hoeft jouw naam niet bij genoemd te
              worden. Zonder die informatie herhalen situaties zich en kan er
              moeilijker iets aan gedaan worden.
            </p>
          ),
        },
        {
          question: "Meer over andere hulporganisaties",
          answer: (
            <>
              <p>
                Als het gaat om seksueel overschrijdend gedrag, dan raden wij
                aan om te rade te gaan bij het Centrum Seksueel Geweld. Zij
                kunnen geheel vrijblijvend en vertrouwelijk advies leveren bij
                jouw situatie. Ook geven zij op hun website al veel bruikbare
                voorlichting om seksueel overschrijdend gedrag beter te kunnen
                begrijpen.
              </p>
              <p>
                <a
                  href="https://centrumseksueelgeweld.nl/"
                  rel="noopener noreferrer nofollow"
                >
                  &#8250; Klik hier om naar de website van CSG te gaan
                </a>
              </p>
              <p>
                Twijfel niet in het geval van fysiek seksueel geweld en neem
                direct contact op met de politie. Zij hebben een speciale
                afdeling, de zedenpolitie, die speciaal is ingericht om je te
                ondersteunen.
              </p>
              <p>
                Je kunt hiervoor de politie bellen op 0900-8844 en vragen naar
                de afdeling zedendelicten.
              </p>
              <p>
                Het is aan jou of je rechtstreeks contact wil opnemen met deze
                partijen. Wij waarderen het ontzettend als je bij ons melding
                wil doen van je klacht, zodat wij beter begrijpen wat er speelt.
                Zo proberen wij volgende situaties te voorkomen en ook andere
                dansers te beschermen. Jouw melding speelt daar een cruciale rol
                in.
              </p>
            </>
          ),
        },
      ],
    },
  },
  other: {
    recent: {
      intro: (
        <>
          <p>
            Ook als jij zelf niet direct betrokken was bij een situatie kan het
            belangrijk zijn dat je er iets mee doet. Soms houden ook bijstanders
            er schadelijke ervaringen aan over, of kunnen ze iets bijdragen. Het
            is daarom goed dat je hier al terecht bent gekomen.
          </p>
          <p>
            Als er iets heftigs plaats heeft gevonden dan zijn er
            hulporganisaties die kort na de gebeurtenis veel voor je kunnen
            betekenen.
          </p>
        </>
      ),
      questions: [
        {
          question: "Meer over andere hulporganisaties",
          answer: (
            <>
              <p>
                Als het gaat om seksueel overschrijdend gedrag, dan raden wij
                aan om te rade te gaan bij het Centrum Seksueel Geweld. Zij
                kunnen geheel vrijblijvend en vertrouwelijk advies leveren bij
                jouw situatie. Ook geven zij op hun website al veel bruikbare
                voorlichting om seksueel overschrijdend gedrag beter te kunnen
                begrijpen.
              </p>
              <p>
                <a
                  href="https://centrumseksueelgeweld.nl/"
                  rel="noopener noreferrer nofollow"
                >
                  &#8250; Klik hier om naar de website van CSG te gaan
                </a>
              </p>
              <p>
                Twijfel niet in het geval van fysiek seksueel geweld en neem
                direct contact op met de politie. Zij hebben een speciale
                afdeling, de zedenpolitie, die speciaal is ingericht om je te
                ondersteunen.
              </p>
              <p>
                Je kunt hiervoor de politie bellen op 0900-8844 en vragen naar
                de afdeling zedendelicten.
              </p>
              <p>
                Het is aan jou of je rechtstreeks contact wil opnemen met deze
                partijen. Wij waarderen het ontzettend als je bij ons melding
                wil doen van je klacht, zodat wij beter begrijpen wat er speelt.
                Zo proberen wij volgende situaties te voorkomen en ook andere
                dansers te beschermen. Jouw melding speelt daar een cruciale rol
                in.
              </p>
            </>
          ),
        },
      ],
    },
    past: {
      intro: (
        <>
          <p>
            Ook als jij zelf niet direct betrokken was bij een situatie kan het
            belangrijk zijn dat je er iets mee doet. Soms houden ook bijstanders
            er schadelijke ervaringen aan over, of kunnen ze iets bijdragen. Het
            is daarom goed dat je hier al terecht bent gekomen.
          </p>
          <p>
            Als er iets heftigs plaats heeft gevonden dan zijn er
            hulporganisaties die kort na de gebeurtenis veel voor je kunnen
            betekenen.
          </p>
        </>
      ),
      questions: [
        {
          question: "Meer over andere hulporganisaties",
          answer: (
            <>
              <p>
                Als het gaat om seksueel overschrijdend gedrag, dan raden wij
                aan om te rade te gaan bij het Centrum Seksueel Geweld. Zij
                kunnen geheel vrijblijvend en vertrouwelijk advies leveren bij
                jouw situatie. Ook geven zij op hun website al veel bruikbare
                voorlichting om seksueel overschrijdend gedrag beter te kunnen
                begrijpen.
              </p>
              <p>
                <a
                  href="https://centrumseksueelgeweld.nl/"
                  rel="noopener noreferrer nofollow"
                >
                  &#8250; Klik hier om naar de website van CSG te gaan
                </a>
              </p>
              <p>
                Twijfel niet in het geval van fysiek seksueel geweld en neem
                direct contact op met de politie. Zij hebben een speciale
                afdeling, de zedenpolitie, die speciaal is ingericht om je te
                ondersteunen.
              </p>
              <p>
                Je kunt hiervoor de politie bellen op 0900-8844 en vragen naar
                de afdeling zedendelicten.
              </p>
              <p>
                Het is aan jou of je rechtstreeks contact wil opnemen met deze
                partijen. Wij waarderen het ontzettend als je bij ons melding
                wil doen van je klacht, zodat wij beter begrijpen wat er speelt.
                Zo proberen wij volgende situaties te voorkomen en ook andere
                dansers te beschermen. Jouw melding speelt daar een cruciale rol
                in.
              </p>
            </>
          ),
        },
      ],
    },
  },
};

const AdviceSection = ({ subject, timeframe }: Props) => {
  const [render, setRender] = React.useState(false);
  const [activeContent, setActiveContent] = React.useState<Content>();

  React.useEffect(() => {
    setRender(false);
    if (!!subject && !!timeframe) {
      const timer = setTimeout(() => {
        setActiveContent(texts[subject][timeframe]);
        setRender(true);
      }, 750);
      return () => clearTimeout(timer);
    } else {
      setRender(false);
    }
  }, [subject, timeframe]);

  return (
    <div className={classNames(styles.render, { [styles.show]: render })}>
      <h3
        style={{
          marginTop: 20,
          marginBottom: 25,
          marginLeft: -15,
          fontSize: 34,
          fontWeight: 500,
          color: "#666",
          fontFamily: `"Roboto", sans-serif`,
        }}
      >
        Ons advies
      </h3>
      {activeContent?.intro}
      <Accordion style={{ margin: "30px 0" }}>
        {activeContent?.questions.map((item, index) => (
          <Accordion.Item key={item.question} eventKey={item.question}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <ContactForm show={render} includeIntroduction />
    </div>
  );
};

export default AdviceSection;
