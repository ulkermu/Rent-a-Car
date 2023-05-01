import Head from "next/head";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";
import { motion } from "framer-motion";

const Blog = ({ dir, blog }) => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.blog.head.title" });
  const description = intl.formatMessage({
    id: "page.blog.head.meta.description",
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
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="blog-section"
        >
          <h1>
            <FormattedMessage
              id="page.blog.title"
              values={{ b: (title) => <b>{title}</b> }}
            />
          </h1>
          <div className="blog-section-links">
            {blog.map((read, key) => (
              <Link className="blog-section-link" key={key} href={read.href}>
                <img src={read.src} alt={read.title} />
                {read.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  try {
    // Fetch data from external API
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL);

    if (!res.ok) {
      console.error(`Failed to fetch data, status: ${res.status}`);
      return {
        notFound: true,
      };
    }

    const blog = await res.json();

    // Pass data to the page via props
    return { props: { blog } };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      notFound: true,
    };
  }
}
