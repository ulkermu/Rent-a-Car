import Link from "next/link";

const SectionLocation = () => {
  const images = [
    {
      id: 1,
      src: "/locations/populer-lokasyon-antalya.jpg",
      href: "/",
      span: 1,
      text: "Antalya Araç Kiralama",
    },
    {
      id: 2,
      src: "/locations/populer-lokasyon-ankara.jpg",
      href: "/",
      span: 2,
      text: "Ankara Araç Kiralama",
    },
    {
      id: 3,
      src: "/locations/populer-lokasyon-bodrum.jpg",
      href: "/",
      span: 3,
      text: "Bodrum Araç Kiralama",
    },
    {
      id: 4,
      src: "/locations/populer-lokasyon-istanbul-anadolu.jpg",
      href: "/",
      span: 4,
      text: "İstanbul Anadolu Araç Kiralama",
    },
    {
      id: 5,
      src: "/locations/populer-lokasyon-istanbul-avrupa.jpg",
      href: "/",
      span: 5,
      text: "İstanbul Avrupa Araç Kiralama",
    },
    // Diğer resimlerinizi buraya ekleyin
  ];

  return (
    <div className="location-section">
      <h2>Popüler lokasyonlar</h2>
      <div className="locations">
        {images.map((image, key) => (
          <Link
            href={image.href}
            key={key}
            className={`location span${image.span}`}
          >
            <img
              loading="lazy"
              className="location-image"
              src={image.src}
              alt={image.text}
            />
            <div className="location-text">{image.text}</div>
            <div className="overlay"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionLocation;
