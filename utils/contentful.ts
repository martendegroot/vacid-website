import { IPage } from "@/types/generated/contentful";
import { createClient } from "contentful";

export enum Languages {
  en = "en-US",
  nl = "nl-NL",
}

type PageType = "homePage" | "page";

interface Path {
  params: {
    slug: string;
  };
  locale: "en" | "nl";
}

type PathArray = Path[];

export async function getContentfulPages(): Promise<PathArray> {
  const client = connect();

  const languages: Array<"en" | "nl"> = ["en", "nl"];

  return (
    await Promise.all(
      languages.map((l) =>
        client.getEntries({
          content_type: "page",
          select: ["fields.path"],
          locale: Languages[l],
        })
      )
    )
  )
    .map(({ items }, i) => {
      const locale = languages[i];
      return (items as IPage[]).map(({ fields }) => ({
        params: { slug: fields.path },
        locale,
      }));
    })
    .flat();
}

export async function getContentfulPageMapping() {
  const client = connect();

  const languages: Array<"en" | "nl"> = ["en", "nl"];

  const pages = (
    await Promise.all(
      languages.map((l) =>
        client.getEntries({
          content_type: "page",
          select: ["fields.path"],
          locale: Languages[l],
        })
      )
    )
  ).map(({ items }) => {
    return (items as IPage[]).map(({ fields }) => fields.path);
  });

  const mapping: any = {};
  const pagesLength = pages[0].length;

  pages.flat().map((p, i) => {
    const isBeforeHalf = i < pagesLength;
    mapping[p] = isBeforeHalf ? pages[1][i] : pages[0][i - pagesLength];
  });

  return mapping;
}

export async function getContentfulData<T extends PageType>({
  type,
  slug,
  locale,
}: {
  type: T;
  slug: "help" | "hulp" | "informatie" | "information";
  locale: Languages;
}) {
  return connect().getEntries({
    content_type: type,
    "fields.path": slug,
    locale,
    include: 5,
  });
}

const connect = () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw Error("No Contentful tokens set");
  }

  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });
};
