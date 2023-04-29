import Head from "next/head";
import { useIntl } from "react-intl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarSelect from "./components/home/sectionCar/CarSelect";
import SectionBlog from "./components/home/SectionBlog";
import SectionAbout from "./components/home/SectionAbout";
import SectionLocation from "./components/home/SectionLocation";
import { Divider } from "@mui/material";

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
      <Header />
      <main dir={dir} className="page">
        <div className="car-section">
          <CarSelect />
        </div>
        <SectionAbout />
        <Divider />
        <SectionLocation />
        <Divider />
        <SectionBlog blog={blog} />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blog`);
  const blog = await res.json();

  // Pass data to the page via props
  return { props: { blog } };
}
