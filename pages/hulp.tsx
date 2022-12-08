import React from "react";
import { useRouter } from "next/router";
import { Header, PageHead } from "@/components/page";
import {
  AdviceSection,
  ContactForm,
  FoldableQuestion,
  QuestionSection,
  Text,
} from "@/components/content";
import { getContentfulData, Languages } from "utils/contentful";
import { ContentfulCollection } from "contentful";
import { IPage } from "@/types/generated/contentful";
import styles from "../styles/Page.module.scss";
import { AdviceProvider } from "@/components/context/AdviceContext";

const Components = {
  advice: AdviceSection,
  contactForm: ContactForm,
  foldableQuestion: FoldableQuestion,
  questionSection: QuestionSection,
  text: Text,
};

type ComponentName = keyof typeof Components;

export async function getStaticProps() {
  return {
    props: {
      pageData: await getContentfulData("page"),
    },
  };
}

interface PageProps {
  pageData: {
    [l in Languages]: ContentfulCollection<IPage>;
  };
}

const Hulp = ({ pageData }: PageProps) => {
  const { locale } = useRouter();
  const collection = pageData[locale as unknown as Languages];
  const {
    pageHead: { fields: pageHeadData },
    header: { fields: headerContent },
    content,
  } = collection.items.find((page) => page.fields.name === "Help")!.fields;

  return (
    <div>
      <PageHead {...pageHeadData} />

      <main id={styles.main}>
        <div className={styles.container}>
          <Header {...headerContent} />

          <AdviceProvider>
            <div style={{ maxWidth: 600, marginTop: 40 }}>
              {content.map((item, i) => {
                const componentName: ComponentName =
                  item.sys.contentType.sys.id;
                const Component = Components[componentName];
                if (componentName === "contactForm") {
                  /*  @ts-ignore:next-line */
                  item.fields = { ...item.fields, show: true };
                }
                /*  @ts-ignore:next-line */
                return React.createElement(Component, {
                  ...item.fields,
                  key: i,
                });
              })}
            </div>
          </AdviceProvider>
        </div>
      </main>
    </div>
  );
};

export default Hulp;
