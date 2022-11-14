/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
    domains: [
      {
        domain: "vacid.nl",
        defaultLocale: "nl",
      },
    ],
  },
  trailingSlash: true,
};
