import React from "react";
import { Header, LocaleSwitcher, PageHead, TopBar } from "@/components/page";
import {
  AdviceSection,
  ContactForm,
  FoldableQuestion,
  QuestionSection,
  Text,
} from "@/components/content";
import {
  getContentfulData,
  getContentfulPageMapping,
  getContentfulPages,
  Languages,
} from "utils/contentful";
import { ContentfulCollection } from "contentful";
import { IPage, IPageFields } from "@/types/generated/contentful";
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

export const getStaticPaths = async () => {
  const paths = await getContentfulPages();
  return {
    paths,
    fallback: false,
  };
};

interface StaticPropsContext {
  params: { slug: "help" | "hulp" | "informatie" | "information" };
  locale: "nl" | "en";
}

export async function getStaticProps({
  locale,
  params: { slug },
}: StaticPropsContext) {
  const content = (await getContentfulData({
    type: "page",
    slug,
    locale: Languages[locale],
  })) as ContentfulCollection<IPage>;

  const mapping = await getContentfulPageMapping();

  return {
    props: {
      pageData: { fields: content.items[0].fields, mapping },
    },
  };
}

interface PageProps {
  pageData: {
    fields: IPageFields;
    mapping: any;
  };
}

const Page = ({ pageData }: PageProps) => {
  const {
    pageHead: { fields: pageHeadData },
    header: { fields: headerContent },
    content,
  } = pageData.fields;

  return (
    <div>
      <PageHead {...pageHeadData} />

      <main id={styles.main}>
        <div className={styles.container}>
          <TopBar pageMapping={pageData.mapping} />
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

export default Page;
