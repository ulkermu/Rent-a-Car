import "@/styles/globals.css";
import "@/styles/menu.css";
import "@/styles/input.css";
import "@/styles/datepickermui.css";
import "@/styles/header/Header.css";
import "@/styles/home/Home.css";
import "@/styles/rent/Rent.css";
import "@/styles/blog/Blog.css";
import "@/styles/about/About.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import tr from "../i18n/tr.json";
import en from "../i18n/en.json";
import de from "../i18n/de.json";
import { RecoilRoot } from "recoil";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const messages = {
  tr,
  en,
  de,
};

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale, route } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RecoilRoot>
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.75 }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 50%, 50% 100%)",
              },
            }}
          >
            <Header />
            <Component {...pageProps} dir={getDirection(locale)} />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </RecoilRoot>
    </IntlProvider>
  );
}
