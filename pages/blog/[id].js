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
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/blog?id=${context.params.id}`
  );
  const blog = await res.json();

  // Pass data to the page via props
  return { props: { blog } };
}
