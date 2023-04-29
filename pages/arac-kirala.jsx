import Footer from "@/pages/components/Footer";
import Header from "@/pages/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import SearchOption from "./components/search/SearchOption";
import {
  differentDropZoneState,
  getCarAddressState,
  dropCarAddressState,
} from "@/atom";
import { useRecoilValue } from "recoil";

const Search = ({ dir, cars }) => {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  const [render, setRender] = useState(false);

  // const title = intl.formatMessage({ id: "page.blog.head.title" });
  // const description = intl.formatMessage({
  //   id: "page.blog.head.meta.description",
  // });

  const differentDropZone = useRecoilValue(differentDropZoneState);
  const getCarAddress = useRecoilValue(getCarAddressState);
  const dropCarAddress = useRecoilValue(dropCarAddressState);

  useEffect(() => {
    if (!getCarAddress || (differentDropZone && !dropCarAddress)) {
      //router.push("/", undefined, { shallow: true });
    } else {
      setRender(true);
    }
  }, [router, getCarAddress, differentDropZone, dropCarAddress]);

  useEffect(() => {
    if (locale === "tr") {
      router.push("/arac-kirala", undefined, { shallow: true });
    } else if (locale === "en") {
      router.push("/en/rent-a-car", undefined, { shallow: true });
    } else if (locale === "de") {
      router.push("/de/ein-auto-mieten", undefined, { shallow: true });
    }
  }, [locale]);

  return (
    <>
      <Head>
        <title>Araç Kirala | Araç Kiralama Sayfası</title>
        <meta
          name="description"
          content="Bütün araçlarımız sudan ucuz ve temiz. Daha ne olsun?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/rental-car.svg" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="x-default" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="tr" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="en" />
        <link rel="icon" href="/static/rental-car.svg" hrefLang="de" />
      </Head>
      <Header />
      <main dir={dir} className="page">
        <div className="rent-a-car">
          <h1>Araç Kiralama Sayfası</h1>
          <SearchOption />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Search;

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/cars`);
//   const cars = await res.json();

//   // Pass data to the page via props
//   return { props: { cars } };
// }
