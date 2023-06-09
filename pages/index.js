import Head from "next/head";
import { useIntl } from "react-intl";
import CarSelect from "../components/home/sectionCar/CarSelect";
import SectionAbout from "../components/home/SectionAbout";
import SectionLocation from "../components/home/SectionLocation";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function Home({ dir, blog }) {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
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
        <div className="car-section">
          <CarSelect />
        </div>
        <SectionAbout />
        <Divider />
        <SectionLocation />
        <Divider />
        <div className="blog-section">
          <h2>Blog</h2>
          <div className="blog-section-links">
            {blog.map((read, key) => (
              <Link className="blog-section-link" key={key} href={read.href}>
                <img src={read.src} alt={read.title} />
                <strong style={{ fontSize: 14 }}>{read.title}</strong>
              </Link>
            ))}
          </div>
          <Link className="blog-page-link" href={"/blog"}>
            Tüm Blog Yazıları
          </Link>
        </div>
      </main>
    </>
  );
}

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
