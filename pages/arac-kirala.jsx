import Head from "next/head";
import SearchOption from "../components/search/SearchOption";


const Search = ({ dir }) => {
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
      <main dir={dir} className="page">
        <div className="rent-a-car">
          <h1>Araç Kiralama Sayfası</h1>
          <SearchOption />
        </div>
      </main>
    </>
  );
};

export default Search;
