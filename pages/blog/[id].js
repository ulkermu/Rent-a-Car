import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BlogTitle = ({ dir, blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="Okuyun, öğrenin." />
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
          <div className="blog-wrapper">
            <div className="image-wrapper">
              <img src={blog.src} alt={blog.title} />
            </div>
            <h1>{blog.title}</h1>
            <div className="blog-content">
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogTitle;

export async function getServerSideProps(context) {
  try {
    // Fetch data from external API
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}?id=${context.params.id}`
    );

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
