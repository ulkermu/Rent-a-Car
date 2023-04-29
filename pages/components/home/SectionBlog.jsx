import Link from "next/link";

const SectionBlog = ({ blog }) => {
  return (
    <div className="blog-section">
      <h2>Blog</h2>
      <div className="blog-section-links">
        {blog?.map((read, key) => (
          <Link className="blog-section-link" key={key} href={read.href}>
            <img src={read.src} alt={read.title} />
            <strong style={{fontSize: 14}}>{read.title}</strong>
          </Link>
        ))}
      </div>
      <Link className="blog-page-link" href={"/blog"}>
        Tüm Blog Yazıları
      </Link>
    </div>
  );
};

export default SectionBlog;
