// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAdviceFields {
  /** Title */
  title: string;

  /** Responses */
  responses: IResponse[];

  /** Contact Form */
  contactForm: IContactForm;
}

export interface IAdvice extends Entry<IAdviceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "advice";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContactFields {
  /** Button label */
  buttonLabel: string;

  /** Form title */
  formTitle: string;

  /** Form introduction */
  formIntroduction: string;

  /** Form linking expression */
  formLinkingExpression: string;

  /** Form closing remark */
  formClosingRemark: string;

  /** Form phone button label */
  formPhoneButtonLabel: string;

  /** Form phone number */
  formPhoneNumber: string;

  /** Form whatsapp button label */
  formWhatsappButtonLabel: string;

  /** Form whatsapp number */
  formWhatsappNumber: string;
}

export interface IContact extends Entry<IContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContactFormFields {
  /** Title */
  title: string;

  /** Introduction */
  introduction: Document;

  /** Name Label */
  nameLabel: string;

  /** Name Placeholder */
  namePlaceholder: string;

  /** NameFeedback */
  nameFeedback: string;

  /** Name Feedback Invalid */
  nameFeedbackInvalid: string;

  /** Email Label */
  emailLabel: string;

  /** Email Placeholder */
  emailPlaceholder: string;

  /** Email Feedback */
  emailFeedback: string;

  /** Email Feedback Invalid */
  emailFeedbackInvalid: string;

  /** Message Label */
  messageLabel: string;

  /** Message Placeholder */
  messagePlaceholder: string;

  /** Message Feedback */
  messageFeedback: string;

  /** Message Feedback Invalid */
  messageFeedbackInvalid: string;

  /** Button Label */
  buttonLabel: string;

  /** Feedback Sent */
  feedbackSent: string;

  /** Feedback Sent Failed */
  feedbackSentFailed: string;

  /** Sent Failed Notice */
  sentFailedNotice: string;
}

export interface IContactForm extends Entry<IContactFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contactForm";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFoldableQuestionFields {
  /** Question */
  question: string;

  /** Answer */
  answer: string;
}

export interface IFoldableQuestion extends Entry<IFoldableQuestionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "foldableQuestion";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHeaderFields {
  /** Brand Name */
  brandName: string;

  /** Page Name */
  pageName: string;

  /** Page Title */
  pageTitle: string;

  /** Page Lead */
  pageLead?: string | undefined;
}

export interface IHeader extends Entry<IHeaderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "header";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomePageFields {
  /** Page Head */
  pageHead: IPageHead;

  /** Title */
  title?: string | undefined;

  /** Introduction */
  introduction?: string | undefined;

  /** Navigation Cards */
  navigationCards: INavigationCard[];

  /** Banner */
  banner?: IVerinormBanner | undefined;

  /** Contact */
  contact: IContact;
}

export interface IHomePage extends Entry<IHomePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homePage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationCardFields {
  /** Path */
  path: string;

  /** Label */
  label: string;

  /** Color */
  color: "orange" | "blue";
}

export interface INavigationCard extends Entry<INavigationCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationCard";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Name */
  name?: string | undefined;

  /** Path */
  path: string;

  /** Page Head */
  pageHead: IPageHead;

  /** Header */
  header: IHeader;

  /** Content */
  content: (
    | IAdvice
    | IContactForm
    | IFoldableQuestion
    | IQuestionSection
    | IText
  )[];

  /** Contact */
  contact: IContact;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageHeadFields {
  /** Page Title */
  pageTitle?: string | undefined;

  /** Meta */
  meta: IPageHeadMeta[];
}

export interface IPageHead extends Entry<IPageHeadFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageHead";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageHeadMetaFields {
  /** name */
  name?: string | undefined;

  /** property */
  property?: string | undefined;

  /** content */
  content?: string | undefined;
}

export interface IPageHeadMeta extends Entry<IPageHeadMetaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageHeadMeta";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuestionFields {
  /** Question */
  question: string;

  /** Answer */
  answer: string;
}

export interface IQuestion extends Entry<IQuestionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "question";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuestionSectionFields {
  /** Topic */
  topic: "subject" | "timeframe";

  /** Question */
  question: string;

  /** Option | A */
  optionA: string;

  /** Option | B */
  optionB: string;
}

export interface IQuestionSection extends Entry<IQuestionSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "questionSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IResponseFields {
  /** Subject */
  subject: "self" | "other";

  /** Timeframe */
  timeframe: "recent" | "past";

  /** Introduction */
  introduction: string;

  /** Questions */
  questions: IQuestion[];
}

export interface IResponse extends Entry<IResponseFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "response";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITextFields {
  /** text */
  text: string;
}

export interface IText extends Entry<ITextFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "text";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IVerinormBannerFields {
  /** Title */
  title: string;

  /** Text */
  text: string;

  /** Button Label */
  buttonLabel: string;

  /** Button URL */
  buttonUrl: string;
}

export interface IVerinormBanner extends Entry<IVerinormBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "verinormBanner";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "advice"
  | "contact"
  | "contactForm"
  | "foldableQuestion"
  | "header"
  | "homePage"
  | "navigationCard"
  | "page"
  | "pageHead"
  | "pageHeadMeta"
  | "question"
  | "questionSection"
  | "response"
  | "text"
  | "verinormBanner";

export type IEntry =
  | IAdvice
  | IContact
  | IContactForm
  | IFoldableQuestion
  | IHeader
  | IHomePage
  | INavigationCard
  | IPage
  | IPageHead
  | IPageHeadMeta
  | IQuestion
  | IQuestionSection
  | IResponse
  | IText
  | IVerinormBanner;

export type LOCALE_CODE = "en-US" | "nl-NL";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
