import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./LocaleSwitcher.module.scss";

export const LocaleSwitcher = () => {
  const { locale, locales, asPath, push } = useRouter();

  useEffect(() => {
    const storedSelection = localStorage.getItem("selectedLocale");
    if (storedSelection && storedSelection !== locale)
      push(asPath, undefined, { locale: storedSelection });
  }, [asPath, locale, push]);

  const storeLocaleSelection = (languageCode: string) => {
    localStorage.setItem("selectedLocale", languageCode);
  };

  return (
    <div className={styles.wrapper}>
      {locales?.map((languageCode) => (
        <Link
          key={languageCode}
          href={asPath}
          locale={languageCode}
          onClick={() => storeLocaleSelection(languageCode)}
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
    </div>
  );
};
