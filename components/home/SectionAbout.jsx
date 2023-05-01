import { FormattedMessage } from "react-intl";
import SmsIcon from "@mui/icons-material/Sms";
import React, { useState } from "react";

const SectionAbout = React.memo(() => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true);
  };

  return (
    <div className="about-section">
      <div className="about-header">
        <h1>En kolay, en hızlı ve en ucuz araç kiralama</h1>
        <p>
          1 dakikada rezervasyon, 5 dakikada araç teslimatı, % 100 müşteri
          memnuniyeti ve en iyi fiyat garantisi veriyoruz.Üstelik aracı teslim
          aldığınız ana kadar herhangi bir ödeme yapmanıza gerek yok.
        </p>
      </div>
      <div className="about-main">
        <h3>Uygun Fiyatlı Araç Kiralama</h3>
        <p>
          Araç kiralama, her geçen yıl daha ayrıcalıklı, gelişmiş seçeneklerle
          müşterilerin karşısına çıkan bir sektör. Siz de otomobil kiralamak,
          gelişmiş seyahat keyfinin tadını çıkarmak için Cizgi Rent a Car
          kurumsallığının deneyimine varın.
        </p>
        <p>
          Kiralama sektörleri, her yıl biraz daha etki alanını genişletiyor. Bir
          ürün, mal ya da hizmeti kiralamak, gelecekte daha sık görülebilecek
          bir eğilim. Bu durum dünyadaki tüketici profilinin belli nedenlerle
          kiralamaya daha yatkın bir hale gelmesinden kaynaklanıyor.
        </p>
        <p>
          Araba, daire, ofis, kurumsal telefon vb. alanlarda geniş bir pazar
          hacmiyle var olan kiralama sektörü tüketicinin karşısına her zaman
          farklı seçenekler sunuyor. Buna ek olarak sunulan hizmet çerçevesinde
          kalite, sürdürebilirlilik, güven, kurumsallaşma vb. etkenler de,
          tüketicilerin mal ya da hizmetleri kiralayarak kullanma eğilimi
          göstermesini sağlıyor.
        </p>
        <p>
          Türkiye’de gelişmiş seçenekler vadeden turizm, araç kiralama sektörünü
          de iyi bir çizgiye taşıdı. Türkiye’de satışı gerçekleşen 100 yeni
          otomobilin 23’ünün araç kiralama sektöründe kullanılması, bu tabloyu
          ortaya koyan ciddi bir veri. Eldeki verilere göre şu an Türkiye’de 360
          bin 769 kiralık araç bulunuyor.
        </p>
        <p>
          Araç kiralama işlemleriniz için daha kurumsal bir yapıyla çalışmaya ne
          dersiniz? Cizgi Rent a Car size aradığınız kaliteyi sunuyor. 25
          lokasyonda hizmet, 7/24 çağrı merkezi ve 40’tan fazla araç tipiyle
          benzersiz bir rent a car deneyimi yaşayın.
        </p>
      </div>
      <div
        onClick={handleReadMore}
        className={readMore ? "about-read-more hidden" : "about-read-more"}
      >
        <SmsIcon />
        <button
          style={{
            width: "fit-content",
            outline: 0,
            border: 0,
            background: "transparent",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
          }}
          type="button"
        >
          <FormattedMessage
            id="page.home.readmore"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </button>
      </div>
      <div className={readMore ? "about-main" : "about-main hidden"}>
        <h3>Neden Araç Kiralama</h3>
        <p>
          Araba kiralama ve yaygın adıyla rent a car, yalnızca turizmin
          etkisiyle büyüyen bir sektör değil. Araba kiralamanın avantajlarını
          deneyimleyen müşteriler, yeni bir araba satın almak yerine kiralama
          seçeneklerini tercih etmeye devam ediyor. Neden mi?
        </p>
        <p>
          Kiralamak sizden, bakım ve temizlik masraflarını üstlenmek şirketten.
        </p>
        <p>Vergi ya da sigorta ödemelerini unutun, şirketiniz hatırlasın.</p>
        <p>
          Gelişebilecek olası ihtiyaçlarda yedek araç hizmetinden yararlanın.
        </p>
        <p>
          Bir araba satın almadan önce deneyimlemek, başarılı bir tercih
          yapabilmenizi sağlar. Bir otomobil satın almak istiyor, fakat markalar
          ve/veya modeller arasında karar veremiyor musunuz? O halde araba
          kiralamak tam size göre. Otomobil adaylarınızı belirli sürelerde
          kiralayın, bu sayede en başarılı kararı verin.
        </p>
        <p>Konforunuzda ısrar edin: Uzun dönem kiralama</p>
        <p>
          Satın aldığınız bir aracın tüm masrafları bir yana, aldığınız
          sorumluluklar ve ayırdığınız zaman da, kiralama seçeneğini
          kullandığınız takdirde ortadan kalkıyor. Araç kiralamanın bireylere
          sağladığı en büyük kazanım, seyahatlerine, işlerine ya da özel
          yaşamlarına odaklanabilmeleridir.
        </p>
        <p>Özel tercihler için özel ayrıcalıklar: Lüks Araç Kiralama</p>
        <p>
          Araç kiralamada yüksek standartlar tercih ediyorsanız, premium
          kiralama seçeneği tam size göre! Yüksek konfora sahip otomobil
          seçenekleri, lüks araç kiralama tercihinizle sizlere daha özel
          fırsatlar sağlıyor. Üst segment araçlarla daha kaliteli, güvenli sürüş
          deneyimi için Cizgi Rent a Car’a gelin, konforlu bir seyahat serisi
          deneyimleyin.
        </p>
        <p>Seyahatlerinize özel: Havaalanı Araç Kiralama</p>
        <p>
          Hızlı ve bağımsız bir hizmet deneyimine ne dersiniz? Cizgi Rent a Car
          haftanın 7 günü 24 saat seyahat dönüşleriniz için özel kiralama
          seçenekleri sunar.
        </p>
        <p>
          Seyahat planlamalarınıza araç kiralamayı da dahil edecekseniz Cizgi
          Rent a Car 12 farklı havaalanında hizmetinizde. Varış noktasında
          aracınızı kiralayıp seyahatlerinize devam etmeniz için bir çok
          lokasyonda hizmet vermekteyiz. Ayrıcalıklı hizmetler, kolay ödeme
          seçenekleri ve güvenli seyahat garantisi siz özel müşterilerimiz için
          tasarlandı.
        </p>
        <p>İster Rezervasyon yapın, isterseniz doğrudan ofisimize gelin!</p>
        <p>
          Antalya, Ankara, İstanbul ve İzmir gibi metropollerin yanı sıra,
          Türkiye’nin birçok şehrinde, haftanın 7 günü 24 saat hizmet
          sunmaktayız. Uçak seyahatlerinizin hemen ardından araba kiralama
          hizmeti kapsamında seçtiğiniz aracı havaalanında teslim alabilir ve
          yolculuğunuza keyifle devam edebilirsiniz.Dilerseniz seyahatiniz
          öncesi Çağrı Merkezimizi arayarak rezervasyon yapabilirsiniz, üstelik
          rezervasyon işleminde ödeme yapmanıza gerek kalmadan.
        </p>
        <p>
          Araç kiralama talebinizi 5 dakika içinde sonuçlandıracağımıza söz
          veriyoruz. Yapmanız gereken tek şey, geçerli bir kimlik kartı, ehliyet
          ve kredi kartı sahibi olmak.
        </p>
      </div>
    </div>
  );
});

export default SectionAbout;
