import { IHomePage, IPage } from "@/types/generated/contentful";
import { createClient, EntryCollection } from "contentful";

export enum Languages {
  en,
  nl,
}

type PageType = "homePage" | "page";

type PageEntryType<T> = T extends "homePage" ? IHomePage : IPage;

export async function getContentfulData<T extends PageType>(type: T) {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw Error("No Contentful tokens set");
  }

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  return {
    nl: (await client.getEntries({
      content_type: type,
      locale: "nl-NL",
      include: 5,
    })) as EntryCollection<PageEntryType<T>>,
    en: (await client.getEntries({
      content_type: type,
      locale: "en-US",
      include: 5,
    })) as EntryCollection<PageEntryType<T>>,
  };
}
