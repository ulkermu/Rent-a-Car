import "@/styles/globals.css";
import "../styles/hamburger.css";
import "@/styles/header/Header.css";
import "@/styles/blog/Blog.css";
import "@/styles/about/About.css";
import "@/styles/home/Home.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import tr from "../i18n/tr.json";
import en from "../i18n/en.json";
import de from "../i18n/de.json";
import { RecoilRoot } from "recoil";

const messages = {
  tr,
  en,
  de,
};

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RecoilRoot>
        <Component {...pageProps} dir={getDirection(locale)} />
      </RecoilRoot>
    </IntlProvider>
  );
}
