const blogData = [
  {
    id: "kis-aylarinde-tatil-yapabileceginiz-yerler",
    title: "Kış Aylarında Tatil Yapabileceğiniz Yerler",
    content:
      "Türkiye, kış tatilleri için mükemmel bir seçenek olabilir. Türkiye'de bulunan birçok farklı bölge, kış tatilleri için cazip hale gelmektedir.",
    src: "/blog/snow.jpg",
    href:"/blog/kis-aylarinde-tatil-yapabileceginiz-yerler"
  },
  {
    id: "yaz-aylarinde-tatil-yapilabilecek-5-yer",
    title: "Yaz Aylarında Tatil Yapılabilecek 5 Yer",
    content:
      "Yaz ayları geliyor ve biliyoruz ki aklınıza “Yazın nereye gidilir ?” veya “Türkiye’deki en güzel tatil yerleri nereleridir?” diye sorular geliyor ve bunları sevdiğiniz kişilerle konuşuyorsunuz. Bu soruların cevabını sizin için bulduk ve derledik.",
    src: "/blog/travel.jpg",
    href:"/blog/yaz-aylarinde-tatil-yapilabilecek-5-yer"
  },
  {
    id: "egenin-baskenti-izmirde-gitmeniz-gereken-5-yer",
    title: "Ege’nin Başkenti İzmir’de Gitmeniz Gereken 5 Yer",
    content:
      "Ege Bölgesi’nde yer alan İzmir, Türkiye’nin en büyük 3. kentidir. Doğal ve tarihi güzellikleriyle, her yıl milyonlarca yabancı ve yerli turistin uğrak noktasıdır. Her köşe başında göz alıcı bir tarihi hazine ve anıtla karşılaşabileceğimiz İzmir; ülkemizin önemli ticaret, fuar ve öğrenci şehirlerinden birisi konumundadır.",
    src: "/blog/temple.jpg",
    href:"/blog/egenin-baskenti-izmirde-gitmeniz-gereken-5-yer"
  },
];

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const blogPost = blogData.find((post) => post.id === id);

    if (blogPost) {
      res.status(200).json(blogPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } else {
    res.status(200).json(blogData);
  }
}
