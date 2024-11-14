import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./LocaleSwitcher.module.scss";

export const LocaleSwitcher = ({ pageMapping }: { pageMapping?: any }) => {
  const { locale, locales, asPath } = useRouter();

  const translatePath = (path: string, languageCode: typeof locale): string =>
    !pageMapping || languageCode === locale
      ? path
      : `/${pageMapping[asPath.replace(/\//g, "")]}/`;

  return (
    <>
      {locales?.map((languageCode) => (
        <Link
          key={languageCode}
          href={translatePath(asPath, languageCode)}
          locale={languageCode}
        >
          <div
            className={classnames(styles.button, {
              [styles.selected]: locale === languageCode,
            })}
          >
            {languageCode}
          </div>
        </Link>
      ))}
    </>
  );
};
