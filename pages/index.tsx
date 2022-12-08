import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { ContentfulCollection, createClient } from "contentful";
import { NavigationCard, LocaleSwitcher, PageHead } from "@/components/page";
import { IHomePage } from "@/types/generated/contentful";
import dancingPeople from "@/images/dancing-people3.jpg";
import logo from "@/images/logo2.png";
import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw Error("No Contentful tokens set");
  }

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const res = {
    nl: await client.getEntries<IHomePage>({
      content_type: "homePage",
      locale: "nl-NL",
      include: 5,
    }),
    en: await client.getEntries<IHomePage>({
      content_type: "homePage",
      locale: "en-US",
      include: 5,
    }),
  };

  return {
    props: {
      pageData: res,
    },
  };
}

interface HomeProps {
  pageData: {
    [l in Languages]: ContentfulCollection<IHomePage>;
  };
}

enum Languages {
  en,
  nl,
}

const Home = ({ pageData }: HomeProps) => {
  const { locale } = useRouter();
  const collection = pageData[locale as unknown as Languages];
  const {
    pageHead: { fields: pageHeadData },
    title,
    introduction,
    navigationCards,
  } = collection.items[0].fields;

  return (
    <div>
      <PageHead {...pageHeadData} />

      <main id={styles.main}>
        <div className={styles.container}>
          <LocaleSwitcher />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Image src={logo} alt="VaCiD logo" width={689} height={242} />
              <div className={styles.intro}>
                <h2>{title}</h2>
                <p>{introduction}</p>
              </div>
              <div className={styles.cardContainer}>
                {navigationCards.map(({ fields }) => (
                  <NavigationCard key={fields.path} {...fields} />
                ))}
              </div>
            </div>
            <SideImage />
          </div>
        </div>
      </main>
    </div>
  );
};

const SideImage = () => (
  <div className={styles.imageContainer}>
    <div>
      <Image
        src={dancingPeople}
        alt="Dancing People"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
);

export default Home;
