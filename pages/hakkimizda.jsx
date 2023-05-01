import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

const About = ({ dir }) => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.about.head.title" });
  const description = intl.formatMessage({
    id: "page.about.head.meta.description",
  });

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
      <main dir={dir} className="page">
        <div className="about">
          <h1>
            <FormattedMessage
              id="page.about.title"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </h1>
        </div>
      </main>
    </>
  );
};

export default About;
