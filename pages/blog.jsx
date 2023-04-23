import Footer from "@/pages/components/Footer";
import Header from "@/pages/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Blog = ({ dir }) => {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  const title = intl.formatMessage({ id: "page.blog.head.title" });
  const description = intl.formatMessage({
    id: "page.blog.head.meta.description",
  });

  useEffect(() => {
    if (locale === "tr") {
      router.push("/blog", undefined, { shallow: true });
    } else if (locale === "en") {
      router.push("/en/blog", undefined, { shallow: true });
    } else if (locale === "de") {
      router.push("/de/blog", undefined, { shallow: true });
    }
  }, [locale]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/rental-car.svg" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="x-default" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="tr" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="en" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="de" />
      </Head>
      <Header />
      <main dir={dir} className="page">
        <div className="blog">
          <h1>
            <FormattedMessage
              id="page.blog.title"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
