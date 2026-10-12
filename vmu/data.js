/**
 * Veri Analitiği - Veri Türleri ve Kaynakları Atölye Çalışması
 * 10 Sektörel Senaryo Havuzu, 10'ar Satırlık Veri Setleri, Kriter Yanıt Anahtarları
 * ve Detaylı Eğitsel Hata / Gerekçe Açıklamaları (Neden Yanlış & Neden Doğru)
 */

const CRITERIA_OPTIONS = {
  dataSources: [
    { group: "Birincil Kaynaklar (Primary)", options: [
      "Birincil: Saha Ölçümü",
      "Birincil: Anket",
      "Birincil: Görüşme",
      "Birincil: Gözlem",
      "Birincil: Deneysel"
    ]},
    { group: "İkincil Kaynaklar (Secondary)", options: [
      "İkincil: Kurum İçi",
      "İkincil: Kurum Dışı - Kamu",
      "İkincil: Kurum Dışı - Açık",
      "İkincil: Sosyal Medya",
      "İkincil: Web Kazıma",
      "İkincil: IoT (Sensör Şebekesi)",
      "İkincil: İş Ortağı / Tedarikçi"
    ]}
  ],
  structuralFormats: [
    { value: "Yapılandırılmış", label: "Yapılandırılmış (Structured)", desc: "İlişkisel tablolar, satır-sütun matrisleri, kesin şema" },
    { value: "Yarı Yapılandırılmış", label: "Yarı Yapılandırılmış (Semi-Structured)", desc: "JSON, XML, HTML etiketleri, esnek anahtar-değer şeması" },
    { value: "Yapılandırılmamış", label: "Yapılandırılmamış (Unstructured)", desc: "Serbest metin, ses kaydı, görüntü, ham tweet" }
  ],
  dataTypes: [
    { value: "Nicel Çok Boyutlu", label: "Nicel Çok Boyutlu (Multidimensional Numerical)", desc: "Sürekli ve oransal çoklu sayısal metrikler" },
    { value: "Kategorik/Karma", label: "Kategorik / Karma (Categorical & Mixed)", desc: "Sınıflandırıcı nominal/ordinal etiketler ve karmalar" },
    { value: "İkili/Küme", label: "İkili / Küme (Binary / Set)", desc: "Var/yok, evet/hayır ikili durumları ve küme üyelikleri" },
    { value: "Metin", label: "Metin (Textual / NLP)", desc: "Doğal dil dizgeleri, serbest yorumlar ve mesajlar" },
    { value: "Zaman Serisi", label: "Zaman Serisi (Time-Series)", desc: "Düzenli zaman aralıklarıyla ardışık sıralı ölçümler" },
    { value: "Mekânsal", label: "Mekânsal (Spatial / Geospatial)", desc: "Coğrafi koordinatlar, 2B/3B konum ve alan verileri" },
    { value: "Ayrık Dizi", label: "Ayrık Dizi (Sequential / Event Log)", desc: "Olay akışları, adımlar dizisi ve tıklama yolları" },
    { value: "Ağ/Grafik", label: "Ağ / Grafik (Network / Graph)", desc: "Düğümler ve kenarlar arası bağlantı ilişkileri" }
  ],
  analyticsTypes: [
    { value: "Betimsel", label: "Betimsel (Descriptive)", question: "Ne oldu?", desc: "Geçmiş veriyi özetleme, raporlama ve durum tespiti" },
    { value: "Tanısal", label: "Tanısal (Diagnostic)", question: "Neden oldu?", desc: "Kök neden analizi, anomalilerin ve ilişkilerin araştırılması" },
    { value: "Kestirimci", label: "Kestirimci (Predictive)", question: "Ne olacak?", desc: "Geleceğe dönük trend tahminleri ve olasılık modellemeleri" },
    { value: "Reçetesel / Kuralcı", label: "Reçetesel / Kuralcı (Prescriptive)", question: "Ne yapmalıyız?", desc: "Otomatik aksiyon önerileri, optimizasyon ve karar kuralları" }
  ]
};

const SCENARIOS = [
  {
    id: 1,
    title: "Deprem ve Yapı Güvenliği İzleme",
    sector: "İnşaat Mühendisliği & Akıllı Şehir",
    icon: "🏢",
    badge: "Sensör / IoT",
    context: "32 katlı bir plazanın kritik taşıyıcı kolonlarına ve çatı kulesine sismik ivmeölçerler (accelerometer) ve piezoelektrik gerinim (strain) sensörleri yerleştirilmiştir. Sistem mikrotitreşimleri, periyot salınımlarını ve yapısal yük gerilimini milisaniye hassasiyetinde ölçerek erken uyarı üretmektedir.",
    columns: ["Zaman", "Sensör ID", "Konum / Kat", "Eksen", "Pik İvme (g)", "Titreşim Frekansı (Hz)", "Gerinim (µε)", "Sıcaklık (°C)", "Yapısal Durum"],
    rows: [
      ["14:02:10", "ACC-K04-X", "Kat 4 / Doğu Kolon", "X", "0.04 g", "1.82 Hz", "240 µε", "19.5 °C", "Normal"],
      ["14:02:11", "ACC-K04-Y", "Kat 4 / Doğu Kolon", "Y", "0.05 g", "1.84 Hz", "255 µε", "19.5 °C", "Normal"],
      ["14:02:12", "ACC-K12-X", "Kat 12 / Çekirdek", "X", "0.09 g", "1.45 Hz", "480 µε", "21.0 °C", "Normal"],
      ["14:02:13", "ACC-K12-Z", "Kat 12 / Çekirdek", "Z", "0.12 g", "1.48 Hz", "510 µε", "21.0 °C", "İzleme Gerekli"],
      ["14:02:14", "ACC-K20-X", "Kat 20 / Batı Kolon", "X", "0.18 g", "0.95 Hz", "820 µε", "22.4 °C", "Dikkat"],
      ["14:02:15", "ACC-K20-Y", "Kat 20 / Batı Kolon", "Y", "0.19 g", "0.94 Hz", "890 µε", "22.4 °C", "Dikkat"],
      ["14:02:16", "ACC-K32-X", "Kat 32 / Çatı Kule", "X", "0.28 g", "0.62 Hz", "1420 µε", "24.1 °C", "Kritik Eşik Aşıldı"],
      ["14:02:17", "ACC-K32-Y", "Kat 32 / Çatı Kule", "Y", "0.31 g", "0.58 Hz", "1580 µε", "24.1 °C", "Kritik Eşik Aşıldı"],
      ["14:02:18", "ACC-K32-Z", "Kat 32 / Çatı Kule", "Z", "0.26 g", "0.60 Hz", "1340 µε", "24.0 °C", "Alarm"],
      ["14:02:19", "STR-B01-K", "Bodrum / Radye Temel", "Z", "0.03 g", "3.10 Hz", "120 µε", "17.2 °C", "Normal"]
    ],
    answerKey: {
      dataSource: "Birincil: Saha Ölçümü",
      dataSourceAlternatives: ["İkincil: IoT (Sensör Şebekesi)"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Zaman Serisi",
      dataTypeAlternatives: ["Nicel Çok Boyutlu"],
      analyticsType: "Kestirimci",
      analyticsTypeAlternatives: ["Reçetesel / Kuralcı"],
      vebb: {
        veri: "10 farklı sensör noktasından belirli zaman damgalarında okunan pik ivme (g), salınım frekansı (Hz) ve gerinim (µε) ham ölçüm değerleri.",
        bilgi: "Kat seviyesi arttıkça salınım frekansı düşmekte (1.82 Hz -> 0.58 Hz periyot uzaması) ve Kat 32 çatı kulesinde pik ivme 0.31 g'ye, gerinim 1580 µε kritik eşik seviyesine fırlamaktadır.",
        icgoru: "Gökdelenin üst katlarında rüzgar yükü veya alt katman rezonansı nedeniyle aşırı dinamik deplasman gerçekleşmekte; çatı bölgesi taşıyıcı elemanlarında yorulma (fatigue) ve mikro çatlak riski oluşmaktadır.",
        bilgelik: "Çatı katındaki ayarlanmış kütle sönümleyicisini (TMD) derhal aktif rezonans moduna geçirin, Kat 28-32 arası asansörleri durdurun ve yapı denetim akustik sensörlerini devreye alarak tahliye protokolü başlatın."
      }
    },
    explanations: {
      whySource: "Bu veri, bina üzerindeki donanım sensörleri (ivmeölçer ve gerinim ölçer) tarafından doğrudan sahada anlık fiziksel ölçümle toplandığı için **Birincil: Saha Ölçümü**'dür. Sensör ağı mimarisi açısından **İkincil: IoT** de kabul edilebilir bir yaklaşımdır. Ancak anket, görüşme veya web kazıma kesinlikle değildir çünkü insan beyanı veya web sayfası yoktur.",
      whyFormat: "Veriler sabit kolon başlıkları, kesin veri tipleri (sayı, saat, metin) ve ilişkisel matris yapısında tutulduğu için **Yapılandırılmış (Structured)** veridir. Serbest metin veya medya içermediğinden yapılandırılmamış sayılamaz.",
      whyType: "Veri, düzenli zaman damgaları (14:02:10, 14:02:11...) boyunca kaydedilen ardışık sinyaller olduğu için öncelikli olarak **Zaman Serisi (Time-Series)**'dir. Birden fazla sayısal sensör metriği barındırdığı için **Nicel Çok Boyutlu** seçimi de kabul edilebilir.",
      whyAnalytics: "Sistemin varoluş amacı, bina yıkılmadan veya kalıcı hasar oluşmadan önce rezonans ve sismik riskleri önceden tahmin edip felaketi öngörmektir; bu nedenle **Kestirimci (Predictive)** analitiktir. Eşik aşıldığında asansörleri durdurma kuralı içerdiği için **Reçetesel / Kuralcı** da geçerlidir. Sadece 'ne oldu'yu raporlamakla yetinilmediğinden salt betimsel değildir.",
      commonMistakes: "En yaygın hata: 'Konum' sütunu var diye doğrudan 'Mekânsal' seçilmesidir. Oysa burada harita/GIS koordinatı değil, zamana bağlı sensör ölçümü esastır."
    }
  },
  {
    id: 2,
    title: "Fabrika Robotik Üretim Hattı ve Arıza Erken Uyarısı",
    sector: "Endüstri 4.0 & Akıllı Üretim",
    icon: "🤖",
    badge: "IoT Telemetri",
    context: "Otomotiv şasi punta kaynak hattında görev yapan 6 eksenli endüstriyel robotların eklem motorlarından, servo sürücülerinden ve hidrolik pistonlarından sürekli toplanan kestirimci bakım telemetri kayıtları.",
    columns: ["Zaman", "Robot ID", "Eklem / Eksen", "Motor Sıcaklığı (°C)", "Akım Çekimi (A)", "Titreşim RMS (mm/s)", "Hidrolik Basınç (bar)", "Döngü Süresi (sn)", "Hata Kodu", "Teşhis"],
    rows: [
      ["08:15:01", "ROB-01", "Eksen 1 (Taban)", "52.4 °C", "14.2 A", "1.1 mm/s", "140 bar", "12.4 sn", "ERR-00", "Normal"],
      ["08:15:02", "ROB-01", "Eksen 3 (Dirsek)", "56.1 °C", "18.5 A", "1.4 mm/s", "142 bar", "12.4 sn", "ERR-00", "Normal"],
      ["08:15:05", "ROB-02", "Eksen 2 (Omuz)", "54.8 °C", "16.1 A", "1.2 mm/s", "139 bar", "12.6 sn", "ERR-00", "Normal"],
      ["08:15:08", "ROB-03", "Eksen 4 (Bilek)", "61.2 °C", "21.0 A", "2.1 mm/s", "135 bar", "13.1 sn", "ERR-00", "Hafif Yüklenme"],
      ["08:15:12", "ROB-04", "Eksen 2 (Omuz)", "78.9 °C", "31.4 A", "4.8 mm/s", "118 bar", "15.8 sn", "WARN-24", "Yüksek Sürtünme"],
      ["08:15:15", "ROB-04", "Eksen 2 (Omuz)", "84.3 °C", "36.2 A", "5.9 mm/s", "112 bar", "16.9 sn", "WARN-28", "Rulman Aşınması"],
      ["08:15:18", "ROB-04", "Eksen 2 (Omuz)", "89.6 °C", "42.0 A", "7.3 mm/s", "104 bar", "18.2 sn", "ALM-91", "Kritik Aşırı Isınma"],
      ["08:15:20", "ROB-05", "Eksen 1 (Taban)", "51.3 °C", "13.9 A", "1.0 mm/s", "141 bar", "12.3 sn", "ERR-00", "Normal"],
      ["08:15:22", "ROB-06", "Eksen 3 (Dirsek)", "55.0 °C", "17.2 A", "1.3 mm/s", "138 bar", "12.5 sn", "ERR-00", "Normal"],
      ["08:15:25", "ROB-07", "Eksen 5 (Rotasyon)", "58.4 °C", "19.1 A", "1.5 mm/s", "140 bar", "12.7 sn", "ERR-00", "Normal"]
    ],
    answerKey: {
      dataSource: "İkincil: IoT (Sensör Şebekesi)",
      dataSourceAlternatives: ["Birincil: Saha Ölçümü", "İkincil: Kurum İçi"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Zaman Serisi",
      dataTypeAlternatives: ["Nicel Çok Boyutlu"],
      analyticsType: "Kestirimci",
      analyticsTypeAlternatives: ["Tanısal"],
      vebb: {
        veri: "Montaj robotlarının eklemlerinden alınan motor sıcaklığı (°C), çekilen akım (A), titreşim RMS (mm/s) ve basınç ölçümlerinden oluşan ham IoT log kayıtları.",
        bilgi: "ROB-04 nolu robotun 2. ekseninde motor sıcaklığı 89.6 °C'ye, akım 42 A'ya fırlamış, titreşim 7.3 mm/s ile normal sınırın 5 katına çıkarken döngü süresi 18.2 saniyeye uzamıştır.",
        icgoru: "ROB-04 omuz eklemindeki rulman yatağında mekanik yağlama kaybı ve mikro çatlak nedeniyle aşırı sürtünme oluşmakta; motor torku karşılamak için aşırı akım çekerek yanma riski taşımaktadır.",
        bilgelik: "Üretim hattında ROB-04'ü sonraki çevrimde güvenli bekleme pozisyonuna alın, iş yükünü yedek ROB-02'ye yönlendirin ve 30 dakika içinde kestirimci bakım ekibiyle rulman değişimi ve yağlama planlayın."
      }
    },
    explanations: {
      whySource: "Robot motor sürücülerinden ve gömülü IoT telemetri cihazlarından kurum içi veri tabanına aktarıldığı için **İkincil: IoT (Sensör Şebekesi)** veya **İkincil: Kurum İçi** veridir. Saha mühendisi bizzat cihazla gidip ölçüm yapmadığı için tipik bir endüstriyel IoT mimarisidir.",
      whyFormat: "Tüm ölçüm parametreleri (Sıcaklık, Akım, RMS, Basınç) net ve önceden tanımlanmış bir veri tabanı tablosu şemasına oturtulmuştur; bu nedenle **Yapılandırılmış** veridir.",
      whyType: "Ölçümler belirli zaman aralıklarında (08:15:01, 08:15:02...) art arda sıralandığı için **Zaman Serisi**'dir. Ayrıca çoklu sayısal sensör sütunları barındırdığı için **Nicel Çok Boyutlu** seçimi de doğrudur.",
      whyAnalytics: "Endüstriyel literatürde buna 'Kestirimci Bakım' (Predictive Maintenance) denir. Amaç robot bozulup hattı durdurmadan ÖNCE arızayı öngörmektir, yani **Kestirimci (Predictive)** analitiktir. 'Neden akım arttı?' kök nedenini araştırma yönüyle **Tanısal** analitik de kısmen kabul edilebilir.",
      commonMistakes: "Hata kodları var diye veriyi 'Kategorik/Karma' veya 'Metin' sanmak. Asıl analiz edilen gövde motorun fiziksel zaman serisi sinyalleridir."
    }
  },
  {
    id: 3,
    title: "Rakip Ürün Fiyat ve Stok Takibi",
    sector: "E-Ticaret & Dinamik Fiyatlandırma",
    icon: "🛒",
    badge: "Web Scraping",
    context: "Bir tüketici elektroniği perakendecisi, popüler ANC kablosuz kulaklık kategorisindeki pazar payını korumak için rakip e-ticaret sitelerinden (Pazarama, Trendyol, Hepsiburada, Amazon vb.) her 15 dakikada bir otomatik botlarla ürün sayfalarını kazımaktadır (web scraping).",
    columns: ["Tarama Zamanı", "Platform", "SKU / Model", "Rakip Mağaza", "Liste Fiyatı (₺)", "İndirimli Fiyat (₺)", "Stok Durumu", "Kargo Vaadi", "Puan (1-5)", "Yorum Sayısı"],
    rows: [
      ["10:00:12", "Trendyol", "ANC-Pro-X100", "TechZone Store", "4.299 ₺", "3.699 ₺", "Son 4 Adet", "Bugün Kargoda", "4.7", "1.420"],
      ["10:00:15", "Hepsiburada", "ANC-Pro-X100", "Resmi Distribütör", "4.499 ₺", "3.850 ₺", "Stokta Var", "Yarın Kapında", "4.8", "3.890"],
      ["10:00:18", "Amazon TR", "ANC-Pro-X100", "Amazon TR Satıcılı", "4.299 ₺", "3.499 ₺", "Tükendi", "1-2 Gün", "4.9", "6.210"],
      ["10:00:22", "N11", "ANC-Pro-X100", "UcuzTekno", "4.199 ₺", "3.590 ₺", "Kritik (2 Adet)", "Ücretsiz Kargo", "4.4", "312"],
      ["10:00:25", "Pazarama", "ANC-Pro-X100", "ElektronikMarket", "4.500 ₺", "3.999 ₺", "Stokta Var", "Standart Kargo", "4.5", "185"],
      ["10:00:30", "Trendyol", "ANC-Air-S50", "MegaStore", "2.899 ₺", "2.399 ₺", "Stokta Var", "Hızlı Kargo", "4.6", "2.140"],
      ["10:00:34", "Amazon TR", "ANC-Air-S50", "Amazon TR", "2.799 ₺", "2.199 ₺", "Son 8 Adet", "Aynı Gün Teslim", "4.8", "4.520"],
      ["10:00:38", "Hepsiburada", "ANC-Air-S50", "MobilDünya", "2.999 ₺", "2.449 ₺", "Stokta Var", "Yarın Kapında", "4.6", "1.780"],
      ["10:00:41", "MediaMarkt", "ANC-Pro-X100", "MediaMarkt Online", "4.499 ₺", "4.199 ₺", "Mağazada Var", "Mağazadan Teslim", "4.7", "890"],
      ["10:00:45", "Teknosa", "ANC-Pro-X100", "Teknosa Web", "4.499 ₺", "4.249 ₺", "Stokta Var", "2 İş Günü", "4.5", "640"]
    ],
    answerKey: {
      dataSource: "İkincil: Web Kazıma",
      dataSourceAlternatives: ["İkincil: Kurum Dışı - Açık"],
      structuralFormat: "Yarı Yapılandırılmış",
      structuralFormatAlternatives: ["Yapılandırılmış"],
      dataType: "Kategorik/Karma",
      dataTypeAlternatives: ["Nicel Çok Boyutlu"],
      analyticsType: "Reçetesel / Kuralcı",
      analyticsTypeAlternatives: ["Kestirimci", "Betimsel"],
      vebb: {
        veri: "Farklı e-ticaret sitelerinden bot ile çekilen platform adı, liste fiyatı, indirimli fiyat, stok durumu ve yorum sayıları tablosu.",
        bilgi: "Amazon TR en agresif fiyatı (3.499 ₺) vermiş ancak stoğu tükenmiştir; pazarda aktif satıştaki en düşük fiyat 3.590 ₺ (N11) ve 3.699 ₺ (Trendyol) seviyesindedir ve rakiplerin stokları kritiktir.",
        icgoru: "Tüketiciler Amazon'daki tükenen stoğun ardından Trendyol ve N11'e yönelecektir; bu mağazaların da stoku tükendiğinde pazar fiyat ortalaması 3.850 ₺ bandına çıkacaktır.",
        bilgelik: "Kendi e-ticaret sitemizdeki ANC-Pro-X100 fiyatını hemen 3.649 ₺ seviyesine ayarlayıp 'Aynı Gün Kargo' rozetini öne çıkarın; rakiplerin stoku bittiğinde ise kâr marjını maksimize etmek için fiyatı 3.840 ₺'ye revize eden dinamik fiyatlandırma kuralını devreye sokun."
      }
    },
    explanations: {
      whySource: "Veri kurum dışındaki web sitelerinden otomatik bot programları aracılığıyla HTML etiketleri taranarak çekildiği için doğrudan **İkincil: Web Kazıma (Web Scraping)**'dır. Herkese açık internet sayfalarından toplandığı için **İkincil: Kurum Dışı - Açık** da geçerlidir.",
      whyFormat: "Web sayfalarından kazınan veriler arka planda HTML DOM/JSON ağaç yapısından ayıklandığı için kökeni **Yarı Yapılandırılmış (Semi-Structured)** veridir. Tablo haline getirildiği için öğrencilerin **Yapılandırılmış** seçmesi de kabul edilebilir.",
      whyType: "Fiyatlar, mağaza adları, stok durum metinleri ve kargo koşulları bir arada bulunduğu için **Kategorik / Karma** bir veri tipidir. Çok sayıda sayısal fiyat ve puan içerdiği için **Nicel Çok Boyutlu** da düşünülebilir.",
      whyAnalytics: "E-ticarette bu verinin toplanma gayesi 'Bizim ürünün fiyatı kaç TL olmalı?' kararını otomatikleştiren 'Dinamik Fiyatlandırma Motoru' kurmaktır. Yani aksiyon belirleyen **Reçetesel / Kuralcı (Prescriptive)** analitiktir.",
      commonMistakes: "Veriyi 'Birincil' zannetmek. E-ticaret siteleri başkasına aittir, veri onların sisteminden dış kaynak olarak çekilmektedir."
    }
  },
  {
    id: 4,
    title: "Kurumsal Şirket Çalışan Bağlılığı ve İstifa Riski",
    sector: "İnsan Kaynakları & People Analytics",
    icon: "👥",
    badge: "İK / Anket Verisi",
    context: "1.500 çalışanlı uluslararası bir teknoloji şirketinde yıllık anonim çalışan memnuniyeti anketi sonuçları ile İK ERP sistemindeki bordro, fazla mesai ve kıdem veritabanı birleştirilmiştir.",
    columns: ["Personel ID", "Departman", "Kıdem (Yıl)", "İş Tatmini (1-5)", "Haftalık Fazla Mesai (Saat)", "Son Terfi (Ay Önce)", "Maaş Skalası", "Devamsızlık (Gün)", "Eğitim Saati", "İstifa Riski Skoru"],
    rows: [
      ["EMP-104", "Yazılım Geliştirme", "2.4 Yıl", "2.1 / 5", "18.5 Saat", "28 Ay", "Piyasa Altı (%82)", "4 Gün", "6 Saat", "%88 (Çok Yüksek)"],
      ["EMP-109", "Yazılım Geliştirme", "3.1 Yıl", "1.9 / 5", "22.0 Saat", "34 Ay", "Piyasa Altı (%78)", "6 Gün", "4 Saat", "%94 (Kritik)"],
      ["EMP-215", "Müşteri Deneyimi", "1.2 Yıl", "3.4 / 5", "5.0 Saat", "12 Ay", "Piyasa Dengi (%100)", "2 Gün", "24 Saat", "%22 (Düşük)"],
      ["EMP-308", "Satış & Pazarlama", "4.0 Yıl", "4.2 / 5", "8.0 Saat", "8 Ay", "Piyasa Üstü (%115)", "1 Gün", "32 Saat", "%12 (Düşük)"],
      ["EMP-412", "Yazılım Geliştirme", "1.8 Yıl", "2.4 / 5", "16.0 Saat", "22 Ay", "Piyasa Altı (%85)", "5 Gün", "8 Saat", "%81 (Yüksek)"],
      ["EMP-520", "Finans & Muhasebe", "5.5 Yıl", "3.8 / 5", "3.5 Saat", "14 Ay", "Piyasa Dengi (%102)", "0 Gün", "16 Saat", "%15 (Düşük)"],
      ["EMP-611", "Veri Analitiği", "2.0 Yıl", "2.5 / 5", "14.0 Saat", "24 Ay", "Piyasa Altı (%88)", "3 Gün", "10 Saat", "%74 (Yüksek)"],
      ["EMP-703", "İnsan Kaynakları", "3.8 Yıl", "4.5 / 5", "2.0 Saat", "6 Ay", "Piyasa Üstü (%110)", "1 Gün", "40 Saat", "%8 (Çok Düşük)"],
      ["EMP-814", "Ürün Yönetimi", "2.9 Yıl", "3.0 / 5", "12.0 Saat", "18 Ay", "Piyasa Dengi (%98)", "3 Gün", "18 Saat", "%45 (Orta)"],
      ["EMP-925", "Yazılım Geliştirme", "3.5 Yıl", "1.7 / 5", "24.5 Saat", "36 Ay", "Piyasa Altı (%75)", "7 Gün", "2 Saat", "%96 (Kritik)"]
    ],
    answerKey: {
      dataSource: "Birincil: Anket",
      dataSourceAlternatives: ["İkincil: Kurum İçi"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Nicel Çok Boyutlu",
      dataTypeAlternatives: ["Kategorik/Karma"],
      analyticsType: "Tanısal",
      analyticsTypeAlternatives: ["Kestirimci"],
      vebb: {
        veri: "İK sisteminden alınan çalışan kıdemi, anket tatmin skoru (1-5), haftalık mesai saati, son terfi zamanı, maaş skalası ve devamsızlık kayıtları.",
        bilgi: "Yazılım geliştirme departmanında 2 yıldan uzun süredir terfi almamış, haftada 16 saatin üzerinde fazla mesai yapan ve piyasa altı maaş alan mühendislerin tatmin skorları 2.5'in altına inmiş, istifa riski %80-%96 aralığına ulaşmıştır.",
        icgoru: "Şirketteki yetenek kaybı (turnover) genel memnuniyetsizlikten ziyade, özellikle teknik kadrodaki tükenmişlik (burnout), adil olmayan piyasa maaş farkı ve kariyer tıkanıklığından kaynaklanmaktadır.",
        bilgelik: "Yazılım departmanındaki 2+ yıl kıdemli personele dönük acil piyasa maaş denkleştirmesi yapın, sprint planlamalarını revize ederek fazla mesaiyi haftalık 5 saat ile sınırlayın ve 1-1 kariyer mentörlük görüşmelerini bu hafta başlatın."
      }
    },
    explanations: {
      whySource: "Çalışan tatmini doğrudan çalışanlara uygulanan anket formuyla toplandığı için **Birincil: Anket**'tir. Şirketin kendi ERP ve bordro veri tabanından gelen mesai ve kıdem bilgileriyle harmanlandığı için **İkincil: Kurum İçi** seçimi de doğrudur.",
      whyFormat: "Veriler İK ilişkisel veri tabanında kolon ve satırlar halinde kesin şemayla saklandığından **Yapılandırılmış** veridir.",
      whyType: "Kıdem yılı, tatmin skoru (1-5), mesai saati, terfi ayı, devamsızlık ve risk yüzdesi gibi çok sayıda sayısal metriği bir arada incelediğimiz için **Nicel Çok Boyutlu**'dur.",
      whyAnalytics: "Buradaki temel soru 'Çalışanlar NEDEN istifa ediyor ve istifa riskini ne tetikliyor?' sorusudur. Kök nedenleri ortaya çıkardığı için **Tanısal (Diagnostic)** analitiktir. Gelecekte kimlerin ayrılabileceğini modelleme yönüyle **Kestirimci** de kabul edilir.",
      commonMistakes: "Veriyi 'Sosyal Medya' veya 'Ayrık Dizi' ile karıştırmak. Bu veri kurumsal insan kaynakları metrik matrisidir."
    }
  },
  {
    id: 5,
    title: "Sosyal Medya Marka Kriz Yönetimi",
    sector: "Halkla İlişkiler & Sosyal Dinleme",
    icon: "💬",
    badge: "X / Twitter Verisi",
    context: "Bir hava yolu şirketinin yoğun bir bayram tatili arifesinde sistemsel arıza nedeniyle seferlerinin iptal edilmesi üzerine X (eski Twitter) platformunda şirketin resmi hesabı (@HavaYoluX) ve #HavaYoluRezaleti etiketiyle paylaşılan ham iletiler.",
    columns: ["Tweet ID", "Zaman", "Kullanıcı Türü", "Takipçi", "Ham Tweet Metni", "Duygu Polaritesi (-1 / +1)", "RT / Paylaşım", "Beğeni", "Kriz Etiketi", "Etki Skoru"],
    rows: [
      ["TW-9801", "11:20:04", "Standart Yolcu", "340", "3 saattir havalimanında mahsur kaldık, hiçbir yetkili açıklama yapmıyor! Su bile vermediler.", "-0.86", "42", "118", "#HavaYoluRezaleti", "Orta"],
      ["TW-9802", "11:22:15", "Gazeteci / Yazar", "145.000", "İstanbul Havalimanı kilit. @HavaYoluX sunucuları çöktü iddiası var, binlerce yolcu mağdur.", "-0.92", "1.240", "4.890", "#SeferIptalleri", "Kritik"],
      ["TW-9803", "11:23:40", "Teknoloji Blogu", "52.000", "Check-in altyapısındaki arıza tüm dış hatları etkiliyor. Kriz iletişimi sıfır.", "-0.78", "310", "1.100", "#HavaYoluX", "Yüksek"],
      ["TW-9804", "11:24:02", "Standart Yolcu", "120", "Çocukla perişan olduk valizler nerede belli değil bagaj bandı çalışmıyor rezalet!", "-0.94", "18", "64", "#Rezalet", "Orta"],
      ["TW-9805", "11:25:30", "Gezgin Fenomeni", "280.000", "Canlı yayın: Havalimanı kapılarında polis barikatı kuruldu, gerginlik tırmanıyor.", "-0.95", "3.400", "12.300", "#CanlıYayın", "Acil / Viral"],
      ["TW-9806", "11:26:10", "Turist / Yabancı", "890", "Flight HY-402 cancelled without notification. Stranded in airport with no hotel voucher.", "-0.88", "35", "92", "#FlightCancelled", "Orta"],
      ["TW-9807", "11:27:00", "Hukukçu / Avukat", "34.000", "SHY-YOLCU yönetmeliğine göre 2 saati aşan gecikmelerde ikram ve tazminat hakkınız var, tutanak tutun.", "-0.40", "890", "3.200", "#YolcuHaklari", "Yüksek"],
      ["TW-9808", "11:28:15", "Standart Yolcu", "75", "Uçak iptal oldu iş görüşmesine yetişemedim zararımı kim karşılayacak?", "-0.82", "12", "45", "#HavaYoluRezaleti", "Düşük"],
      ["TW-9809", "11:29:05", "Resmi Destek Botu", "1.2 M", "@yolcu Merhaba, yoğunluk nedeniyle DM üzerinden bilet kodunuzla yardımcı oluyoruz.", "+0.10", "4", "15", "#Destek", "Resmi Yanıt"],
      ["TW-9810", "11:30:00", "Ekonomi Analisti", "95.000", "Hisselerdeki düşüş başladı. Kriz sadece operasyonel değil doğrudan itibar ve marka değeri kaybı.", "-0.65", "420", "1.650", "#Borsa", "Yüksek"]
    ],
    answerKey: {
      dataSource: "İkincil: Sosyal Medya",
      dataSourceAlternatives: ["İkincil: Kurum Dışı - Açık"],
      structuralFormat: "Yapılandırılmamış",
      structuralFormatAlternatives: ["Yarı Yapılandırılmış"],
      dataType: "Metin",
      dataTypeAlternatives: ["Ağ/Grafik", "Kategorik/Karma"],
      analyticsType: "Tanısal",
      analyticsTypeAlternatives: ["Reçetesel / Kuralcı"],
      vebb: {
        veri: "X platformundan API veya web kazıma ile çekilen tweet metinleri, duygu skorları (-1 ile +1 arası), kullanıcı takipçi sayıları ve etkileşim sayıları.",
        bilgi: "Olay 10 dakika içinde viral olmuş; ortalama duygu polaritesi -0.85 seviyesindedir. Yüksek takipçili gazeteci ve fenomenlerin paylaşımlarıyla kriz gündemin 1. sırasına yükselmiş ve hukuki hak arayışı örgütlenmeye başlamıştır.",
        icgoru: "Krizin asıl patlama noktası teknik arıza değil; havalimanında fiziksel iletişimin kopması, ikram/otel kuponu verilmemesi ve sosyal medyadaki resmi botun geç ve yetersiz yanıt vermesidir.",
        bilgelik: "Genel Müdür düzeyinde şeffaf ve özür dileyen bir canlı basın açıklaması yayınlayın; havalimanı terminaline acil kumanya tırları sevk edin ve bilet iptal/iade/otel tazminatlarını koşulsuz açan kriz protokolünü derhal yürürlüğe koyun."
      }
    },
    explanations: {
      whySource: "Kullanıcı iletileri X (Twitter) platformundan çekildiği için açıkça **İkincil: Sosyal Medya** kaynağıdır.",
      whyFormat: "Analizin merkezinde yer alan ham iletiler serbest doğal dil cümleleridir (Doğal Dil İşleme gerektirir). Bu nedenle klasik ilişkisel şemaya uymayan **Yapılandırılmamış (Unstructured)** veridir. Tweet API çıktısı JSON üstverisi barındırdığı için **Yarı Yapılandırılmış** da kabul edilir.",
      whyType: "Temel analiz birimi doğal dilde yazılmış insan cümleleridir, dolayısıyla veri türü **Metin (Textual / NLP)**'dir. Tweetlerin kullanıcılar arasındaki yayılımı ve retweet ağları inceleniyorsa **Ağ/Grafik** de geçerlidir.",
      whyAnalytics: "Kriz anında yapılan sosyal dinleme (social listening); krizin neden patladığını ve hangi paylaşımların yangını körüklediğini anlamak için yapıldığından **Tanısal (Diagnostic)** analitiktir. 'Nasıl müdahale etmeliyiz?' kararı yönüyle **Reçetesel** de geçerlidir.",
      commonMistakes: "Tweet tablosu satır-sütun şeklinde gösterildi diye verinin özünü 'Yapılandırılmış' sanmak. Oysa 'Ham Tweet Metni' serbest metindir."
    }
  },
  {
    id: 6,
    title: "İlaç Etken Maddesi Klinik Doz Deneyi",
    sector: "Sağlık & Klinik Biyoistatistik",
    icon: "🧪",
    badge: "Laboratuvar / Klinik",
    context: "Romatoid artrit tedavisinde geliştirilen yeni bir monoklonal antikor molekülünün Faz-2 klinik randomize çift kör deneyinde, 4 farklı doz grubu (Plasebo, 10mg, 25mg, 50mg) üzerinde elde edilen biyokimya ve etkinlik verileri.",
    columns: ["Denek Kodu", "Doz Grubu", "Yaş / Cinsiyet", "Bazal CRP (mg/L)", "Hafta 8 CRP (mg/L)", "Ağrı Azalma Oranı (%)", "Karaciğer ALT (U/L)", "Plazma Kons. (µg/mL)", "Yan Etki Derecesi", "Klinik Yanıt"],
    rows: [
      ["SUBJ-001", "Plasebo (0 mg)", "48 / K", "24.5 mg/L", "23.8 mg/L", "%6.0", "22 U/L", "0.0 µg/mL", "0 (Yok)", "Yanıtsız"],
      ["SUBJ-002", "Plasebo (0 mg)", "54 / E", "31.0 mg/L", "30.2 mg/L", "%4.5", "26 U/L", "0.0 µg/mL", "0 (Yok)", "Yanıtsız"],
      ["SUBJ-003", "Düşük Doz (10 mg)", "42 / K", "28.0 mg/L", "18.5 mg/L", "%38.0", "28 U/L", "4.2 µg/mL", "1 (Hafif Baş Ağrısı)", "Kısmi Yanıt"],
      ["SUBJ-004", "Düşük Doz (10 mg)", "59 / E", "26.4 mg/L", "16.8 mg/L", "%42.0", "31 U/L", "4.6 µg/mL", "0 (Yok)", "Kısmi Yanıt"],
      ["SUBJ-005", "Orta Doz (25 mg)", "39 / K", "29.2 mg/L", "7.1 mg/L", "%76.0", "34 U/L", "12.8 µg/mL", "1 (Hafif Mide Bulantısı)", "Güçlü İyileşme"],
      ["SUBJ-006", "Orta Doz (25 mg)", "51 / K", "33.5 mg/L", "6.8 mg/L", "%81.0", "36 U/L", "13.4 µg/mL", "0 (Yok)", "Güçlü İyileşme"],
      ["SUBJ-007", "Orta Doz (25 mg)", "63 / E", "27.8 mg/L", "8.2 mg/L", "%72.0", "38 U/L", "11.9 µg/mL", "1 (Hafif Halsizlik)", "Güçlü İyileşme"],
      ["SUBJ-008", "Yüksek Doz (50 mg)", "45 / E", "30.1 mg/L", "5.4 mg/L", "%84.0", "92 U/L (Yüksek)", "28.5 µg/mL", "3 (Şiddetli Karaciğer Toksisitesi)", "Doz Aşımı Riski"],
      ["SUBJ-009", "Yüksek Doz (50 mg)", "57 / K", "32.0 mg/L", "5.0 mg/L", "%86.0", "108 U/L (Yüksek)", "31.2 µg/mL", "3 (Akut Enzim Artışı)", "Tedavi Durduruldu"],
      ["SUBJ-010", "Düşük Doz (10 mg)", "50 / E", "25.0 mg/L", "15.0 mg/L", "%44.0", "29 U/L", "4.4 µg/mL", "0 (Yok)", "Kısmi Yanıt"]
    ],
    answerKey: {
      dataSource: "Birincil: Deneysel",
      dataSourceAlternatives: ["Birincil: Saha Ölçümü"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Nicel Çok Boyutlu",
      dataTypeAlternatives: ["Kategorik/Karma"],
      analyticsType: "Tanısal",
      analyticsTypeAlternatives: ["Kestirimci"],
      vebb: {
        veri: "Kontrollü klinik deney ortamında 10 denekten alınan doz grubu, CRP enflamasyon değerleri, ağrı azalma yüzdeleri, ALT enzim seviyeleri ve yan etki kayıtları.",
        bilgi: "25 mg orta doz grubunda CRP %75+ düşmüş ve ağrıda %76-%81 azalma sağlanırken enzimler normal kalmıştır; 50 mg yüksek doz grubunda ise etkinlik çok az artarken karaciğer ALT enzimi 90-108 U/L'ye fırlayarak toksik sınıra ulaşmıştır.",
        icgoru: "Molekülün terapötik penceresi (etkinlik/güvenlik dengesi) 25 mg seviyesinde optimumdur; 50 mg doza çıkıldığında karaciğer metabolizması doymakta ve hepatotoksisite riski oluşmaktadır.",
        bilgelik: "Faz-3 klinik protokolünde 50 mg doz kolunu güvenlik gerekçesiyle sonlandırın; 25 mg'ı hedef terapötik standart doz olarak belirleyip karaciğer izlem protokolüyle onay başvuru dosyasını hazırlayın."
      }
    },
    explanations: {
      whySource: "Veri, araştırmacıların doğrudan kontrol ettiği çift kör laboratuvar ve klinik deney ortamında üretildiği için bilimsel metodolojide **Birincil: Deneysel (Experimental)** veridir.",
      whyFormat: "Klinik protokol standartlarına uygun sayısal değişkenler, referans aralıkları ve hasta kayıt formları matrisinde tutulduğu için **Yapılandırılmış**'tır.",
      whyType: "Doz, CRP, ağrı yüzdesi, ALT enzimi ve konsantrasyon gibi çok sayıda sürekli sayısal parametre ölçüldüğü için **Nicel Çok Boyutlu**'dur.",
      whyAnalytics: "Doz miktarı ile yan etki veya iyileşme arasındaki biyolojik sebep-sonuç ilişkisini incelediğimiz için **Tanısal (Diagnostic)** analitiktir. Hangi dozun hastayı iyileştireceğini tahmin etme yönüyle **Kestirimci** de kabul edilir.",
      commonMistakes: "Hastaneden veya arşivden hazır çekilmiş sanarak 'İkincil' seçmek. Oysa bu aktif bir Faz-2 kontrollü klinik deneyidir."
    }
  },
  {
    id: 7,
    title: "Şehir İçi Hava Kalitesi ve Kirlilik Dağılımı",
    sector: "Çevre Bilimi & Akıllı Belediyecilik",
    icon: "🌱",
    badge: "Çevre / CBS İstasyon",
    context: "Bir büyükşehir belediyesi Çevre Koruma Daire Başkanlığı tarafından 10 farklı semte yerleştirilmiş otomatik hava izleme istasyonlarından alınan anlık partikül madde (PM2.5, PM10), azot dioksit ve meteorolojik ölçüm verileri.",
    columns: ["İstasyon ID", "Semt / Bölge", "Rakım (m)", "PM2.5 (µg/m³)", "PM10 (µg/m³)", "NO2 (ppb)", "Rüzgar Hızı (km/s)", "Sıcaklık (°C)", "Hava Kalite İndeksi (AQI)", "Sağlık Riski"],
    rows: [
      ["AQ-01", "Kadıköy / Rıhtım", "12 m", "38 µg/m³", "64 µg/m³", "42 ppb", "18 km/s", "16.4 °C", "107 (Hassas)", "Hassas Gruplar İçin Uyarı"],
      ["AQ-02", "Beşiktaş / Meydan", "8 m", "44 µg/m³", "78 µg/m³", "58 ppb", "12 km/s", "17.0 °C", "122 (Hassas)", "Trafik Kaynaklı Kirlilik"],
      ["AQ-03", "Maslak / Finans", "145 m", "22 µg/m³", "35 µg/m³", "24 ppb", "24 km/s", "14.8 °C", "72 (Orta)", "Kabul Edilebilir"],
      ["AQ-04", "Esenyurt / Sanayi", "110 m", "88 µg/m³", "165 µg/m³", "84 ppb", "4 km/s", "15.1 °C", "168 (Sağlıksız)", "Yüksek Kirlilik Alarmı"],
      ["AQ-05", "İkitelli / OSB", "95 m", "96 µg/m³", "182 µg/m³", "92 ppb", "3 km/s", "15.5 °C", "174 (Sağlıksız)", "Kritik Sanayi Emisyonu"],
      ["AQ-06", "Sarıyer / Orman", "160 m", "9 µg/m³", "14 µg/m³", "6 ppb", "28 km/s", "13.9 °C", "38 (İyi)", "Temiz ve Sağlıklı"],
      ["AQ-07", "Ümraniye / Tepeüstü", "130 m", "52 µg/m³", "89 µg/m³", "61 ppb", "8 km/s", "15.8 °C", "138 (Hassas)", "Kavşak Sıkışıklığı"],
      ["AQ-08", "Zeytinburnu / E-5", "25 m", "68 µg/m³", "120 µg/m³", "76 ppb", "7 km/s", "16.2 °C", "154 (Sağlıksız)", "Ağır Dizel Emisyonu"],
      ["AQ-09", "Beykoz / Kavacık", "120 m", "18 µg/m³", "28 µg/m³", "18 ppb", "22 km/s", "14.5 °C", "63 (Orta)", "Kabul Edilebilir"],
      ["AQ-10", "Çatalca / Kırsal", "180 m", "7 µg/m³", "11 µg/m³", "4 ppb", "32 km/s", "13.2 °C", "29 (İyi)", "Çok Temiz"]
    ],
    answerKey: {
      dataSource: "Birincil: Saha Ölçümü",
      dataSourceAlternatives: ["İkincil: Kurum Dışı - Kamu", "İkincil: IoT (Sensör Şebekesi)"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Mekânsal",
      dataTypeAlternatives: ["Zaman Serisi", "Nicel Çok Boyutlu"],
      analyticsType: "Betimsel",
      analyticsTypeAlternatives: ["Tanısal", "Kestirimci"],
      vebb: {
        veri: "10 farklı belediye çevre istasyonundan toplanan rakım, PM2.5, PM10, NO2 gazı, rüzgar hızı ve hesaplanmış AQI indeks sayısal verileri.",
        bilgi: "Rüzgar hızı düşük (3-4 km/s) olan çukur havzalardaki Esenyurt ve İkitelli sanayi bölgelerinde PM2.5 (88-96 µg/m³) ve NO2 (84-92 ppb) seviyeleri Dünya Sağlık Örgütü limitlerinin 4 katına çıkmış ve AQI 174 ile 'Sağlıksız' düzeydedir.",
        icgoru: "Kirlilik yoğunluğu sadece kaynak emisyonuna değil, meteorolojik inversiyon (durgun hava) ve topografik çanaklaşmaya bağlı olarak dağılamamakta ve sanayi vadilerinde hapsolmaktadır.",
        bilgelik: "Esenyurt ve İkitelli sanayi bölgelerindeki fabrikalara 48 saatlik filtreleme ve vardiya kısıtlaması tebliğ edin, bölgedeki okullarda açık hava aktivitelerini durdurun ve rüzgar koridoru açacak kentsel planlama revizyonunu başlatın."
      }
    },
    explanations: {
      whySource: "İstasyon cihazları açık sahada doğrudan atmosferik fiziksel partikülleri ölçtüğü için **Birincil: Saha Ölçümü**'dür. Çevre Bakanlığı gibi kamu kuruluşlarının açık istasyon portalından çekilmiş kabul edilirse **İkincil: Kurum Dışı - Kamu** da kabul edilir.",
      whyFormat: "Her istasyonun rakım, PM2.5, PM10 ve gaz değerleri düzenli tablosal şemada toplandığından **Yapılandırılmış**'tır.",
      whyType: "Burada temel değişken farklı coğrafi ilçeler, semtler ve topoğrafik koordinatlardır. Şehir haritası üzerine yerleştirilen coğrafi veriler olduğu için **Mekânsal (Spatial / Geospatial)** veri türüdür.",
      whyAnalytics: "Mevcut hava kirliliğinin şehirdeki durumunu haritalandırmak, indeks hesaplamak ve mevcut durumu özetlemek **Betimsel (Descriptive - Ne oldu / Ne durumda?)** analitiktir.",
      commonMistakes: "'İstasyonlar zamanla ölçüm yapıyor' diye hemen zaman serisi seçmek; oysa burada zaman sabit tutulmuş, 10 farklı coğrafi noktanın mekânsal dağılımı kıyaslanmaktadır."
    }
  },
  {
    id: 8,
    title: "Tedarik Zinciri ve Lojistik Sevkiyat Gecikmeleri",
    sector: "Tedarik Zinciri & Lojistik",
    icon: "🚢",
    badge: "Kurum İçi / Lojistik",
    context: "Çok uluslu bir dayanıklı tüketim malları üreticisinin Avrupa ve Asya montaj fabrikalarına yarı iletken ve hammadde taşıyan uluslararası konteyner taşımacılığı operasyon logları.",
    columns: ["Sevkiyat Kodu", "Çıkış Limanı", "Varış Fabrikası", "Taşıma Modu", "Planlanan Süre", "Fiili Süre", "Gecikme (Gün)", "Kök Neden", "Navlun Bedeli ($)", "Teslimat Durumu"],
    rows: [
      ["SHP-8801", "Şanghay, Çin", "Rotterdam / Hollanda", "Denizyolu", "28 Gün", "44 Gün", "+16 Gün", "Kızıldeniz Rota Değişimi & Cape Bypass", "$4.800", "Kritik Gecikme"],
      ["SHP-8802", "Shenzhen, Çin", "Hamburg / Almanya", "Demiryolu (Kuzey)", "18 Gün", "21 Gün", "+3 Gün", "Polonya Sınır Gümrük Yoğunluğu", "$6.200", "Hafif Gecikme"],
      ["SHP-8803", "Busan, G. Kore", "Kocaeli / Türkiye", "Denizyolu", "26 Gün", "41 Gün", "+15 Gün", "Süveyş Kanalı Güvenlik Riski", "$4.950", "Kritik Gecikme"],
      ["SHP-8804", "Frankfurt, Almanya", "Bursa / Türkiye", "Karayolu", "4 Gün", "4 Gün", "0 Gün", "Sorunsuz Sevkiyat", "$2.100", "Zamanında"],
      ["SHP-8805", "Taipei, Tayvan", "Prag / Çekya", "Havayolu", "2 Gün", "3 Gün", "+1 Gün", "Havalimanı Kargo Aktarma Rötarlı", "$14.500", "Kabul Edilebilir"],
      ["SHP-8806", "Ningbo, Çin", "Trieste / İtalya", "Denizyolu", "27 Gün", "45 Gün", "+18 Gün", "Ümit Burnu Dolaşımı + Liman Grevi", "$5.100", "Kritik Gecikme"],
      ["SHP-8807", "Yokohama, Japonya", "Rotterdam / Hollanda", "Denizyolu", "30 Gün", "46 Gün", "+16 Gün", "Kızıldeniz Jeopolitik Sapması", "$5.300", "Kritik Gecikme"],
      ["SHP-8808", "Gdansk, Polonya", "Bratislava / Slovakya", "Karayolu", "2 Gün", "2 Gün", "0 Gün", "Sorunsuz Sevkiyat", "$1.400", "Zamanında"],
      ["SHP-8809", "Singapur", "Barselona / İspanya", "Denizyolu", "22 Gün", "37 Gün", "+15 Gün", "Afrika Burnu Uzun Rota", "$4.600", "Kritik Gecikme"],
      ["SHP-8810", "Seul, G. Kore", "Katowice / Polonya", "Havayolu", "2 Gün", "2 Gün", "0 Gün", "Acil Çip Sevkiyatı", "$16.800", "Zamanında (Yüksek Maliyet)"]
    ],
    answerKey: {
      dataSource: "İkincil: Kurum İçi",
      dataSourceAlternatives: ["İkincil: İş Ortağı / Tedarikçi"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Kategorik/Karma",
      dataTypeAlternatives: ["Zaman Serisi", "Mekânsal"],
      analyticsType: "Tanısal",
      analyticsTypeAlternatives: ["Reçetesel / Kuralcı"],
      vebb: {
        veri: "Lojistik ERP sisteminden derlenen sevkiyat kodları, rotalar, taşıma modları, planlanan/fiili süreler, gecikme günleri ve navlun maliyetleri tablosu.",
        bilgi: "Asya'dan deniz yoluyla gelen tüm konteynerler istisnasız 15-18 gün gecikmekte ve Ümit Burnu dolaşımı nedeniyle yakıt maliyeti artmaktadır; havayolu ve Avrupa içi karayolu ise zamanında ulaşmaktadır.",
        icgoru: "Gecikmeler liman içi operasyonel verimsizlikten değil, Kızıldeniz jeopolitik krizinin denizyolu geçiş rotalarını zorunlu olarak 6.000 mil uzatmasından kaynaklanmaktadır.",
        bilgelik: "Montaj hatlarının durmasını önlemek için kritik mikroçip bileşenlerini denizyolundan demiryolu/havayolu hibrit koridoruna kaydırın ve güvenlik stoku tamponunu (buffer stock) 30 günden 60 güne yükseltin."
      }
    },
    explanations: {
      whySource: "Veriler şirketin kendi ERP, SAP ve lojistik yönetim yazılımında tutulan operasyon kayıtları olduğu için **İkincil: Kurum İçi** veridir. Dış taşıyıcı firmalardan entegrasyonla alındığı için **İkincil: İş Ortağı** da doğrudur.",
      whyFormat: "Konteyner kodu, taşıma modu, planlanan ve fiili günler sütunları ilişkisel veri tabanında standart şemada yer aldığından **Yapılandırılmış**'tır.",
      whyType: "Şehirler, ülkeler, taşıma türleri (kategorik) ile gün ve navlun fiyatları (sayısal) bir arada harmanlandığı için **Kategorik / Karma** veri tipidir.",
      whyAnalytics: "Analizin amacı sevkiyatların 'NEDEN geciktiğini' araştırmak ve gecikme sebeplerini ayrıştırmaktır. Dolayısıyla kök neden arayan **Tanısal (Diagnostic)** analitiktir. Rota değişikliği önerisi için **Reçetesel** de geçerlidir.",
      commonMistakes: "Veriyi 'Birincil' sanmak. Şirket lojistik verilerini kendi iç sistemindeki kayıtlardan raporlamaktadır."
    }
  },
  {
    id: 9,
    title: "Web Sitesi Ziyaretçi Tıklama Akışı (Clickstream)",
    sector: "Dijital Analitik & UX Optimizasyonu",
    icon: "🖱️",
    badge: "Clickstream / Log",
    context: "Yüksek hacimli bir e-ticaret moda sitesinin kullanıcı deneyimi (UX) izleyicileri ve sunucu logları tarafından yakalanan tekil ziyaretçi oturum tıklama sekansları, gezinme süreleri ve sepet terk analiz verileri.",
    columns: ["Oturum ID", "Kullanıcı Tipi", "Cihaz / Tarayıcı", "Tıklama Akış Dizisi (Clickstream)", "Adım Sayısı", "Sitede Kalış (sn)", "Sepet Tutarı (₺)", "Terk Noktası", "Engel / Hata", "Dönüşüm"],
    rows: [
      ["SESS-701", "Yeni Ziyaretçi", "Mobil / Safari iOS", "AnaSayfa -> Kategori -> Ürün -> SepeteEkle -> ÖdemeAdımı", "5 Adım", "240 sn", "1.250 ₺", "Adres & Kargo Seçimi", "Zorunlu Üyelik Formu", "Satış Yok (Terk)"],
      ["SESS-702", "Kayıtlı Müşteri", "Masaüstü / Chrome", "Arama -> Filtreleme -> Ürün -> SepeteEkle -> KartBilgisi -> Onay", "6 Adım", "180 sn", "2.400 ₺", "Başarılı Sipariş", "Yok", "Dönüşüm Sağlandı"],
      ["SESS-703", "Yeni Ziyaretçi", "Mobil / Android", "AnaSayfa -> Kampanya -> Ürün -> SepeteEkle -> ÖdemeAdımı", "5 Adım", "310 sn", "890 ₺", "Kargo Seçimi", "Kargo Ücreti Sürprizi (120₺)", "Satış Yok (Terk)"],
      ["SESS-704", "Yeni Ziyaretçi", "Mobil / Safari iOS", "InstagramReklam -> Ürün -> SepeteEkle -> ÖdemeAdımı", "4 Adım", "150 sn", "1.650 ₺", "Üyelik Ekranı", "SMS Doğrulama Kodu Gelmedi", "Satış Yok (Hata)"],
      ["SESS-705", "Kayıtlı Müşteri", "Mobil / Android", "AnaSayfa -> Favoriler -> SepeteEkle -> HızlıÖdeme -> Onay", "5 Adım", "95 sn", "670 ₺", "Başarılı Sipariş", "Yok", "Dönüşüm Sağlandı"],
      ["SESS-706", "Yeni Ziyaretçi", "Mobil / Chrome", "GoogleAds -> Kategori -> Filtre -> Ürün -> SepeteEkle -> Ödeme", "6 Adım", "280 sn", "3.100 ₺", "Kargo Adımı", "Şifre Koyma Zorunluluğu", "Satış Yok (Terk)"],
      ["SESS-707", "Yeni Ziyaretçi", "Masaüstü / Firefox", "Blogİçerik -> Ürün -> İnceleme -> SepeteEkle -> Ödeme", "5 Adım", "420 sn", "1.450 ₺", "Ödeme Yöntemi", "Kapıda Ödeme Yokluğu", "Satış Yok (Terk)"],
      ["SESS-708", "Kayıtlı Müşteri", "Masaüstü / Edge", "AnaSayfa -> Siparişlerim -> YenidenSipariş -> Onay", "4 Adım", "75 sn", "980 ₺", "Başarılı Sipariş", "Yok", "Dönüşüm Sağlandı"],
      ["SESS-709", "Yeni Ziyaretçi", "Mobil / Safari iOS", "TiktokReklam -> Ürün -> BedenSeçim -> SepeteEkle -> Ödeme", "5 Adım", "195 sn", "2.100 ₺", "Kullanıcı Kayıt Ekranı", "Uzun TC Kimlik / Form Alanı", "Satış Yok (Terk)"],
      ["SESS-710", "Yeni Ziyaretçi", "Mobil / Android", "Arama -> Ürün -> SepeteEkle -> ÖdemeAdımı", "4 Adım", "160 sn", "750 ₺", "Kargo Bedeli", "Beklenmeyen Kargo Tutarı", "Satış Yok (Terk)"]
    ],
    answerKey: {
      dataSource: "İkincil: Kurum İçi",
      dataSourceAlternatives: ["İkincil: Web Kazıma"],
      structuralFormat: "Yarı Yapılandırılmış",
      structuralFormatAlternatives: ["Yapılandırılmış"],
      dataType: "Ayrık Dizi",
      dataTypeAlternatives: ["Nicel Çok Boyutlu", "Kategorik/Karma"],
      analyticsType: "Tanısal",
      analyticsTypeAlternatives: ["Reçetesel / Kuralcı"],
      vebb: {
        veri: "Web sitesi telemetrisi ve oturum loglarından elde edilen tıklama adım sıralaması, süreler, cihaz tipleri, terk edilen sayfa noktaları ve hata logları.",
        bilgi: "Mobil cihazla gelen yeni ziyaretçiler sepete ürün eklemelerine rağmen (%80+ sepet terk), ödeme adımı ile adres arasındaki 'Zorunlu Üyelik / SMS Doğrulama' ve 'Beklenmeyen Kargo Ücreti' ekranında alışverişi bırakmaktadır.",
        icgoru: "Mobil ziyaretçiler hızlı alışveriş odaklıdır; zorunlu üyelik formları ve sepet sonrasında beliren kargo sürprizleri yüksek sürtünme (friction) yaratarak satın alma kararını baltalamaktadır.",
        bilgelik: "Sepet aşamasına tek tıkla 'Misafir Olarak Devam Et' (Guest Checkout) seçeneği ekleyin, SMS doğrulamasını ödeme sonrasına erteleyin ve sepet sayfasında '750 TL üzerine Ücretsiz Kargo' ilerleme çubuğunu hemen devreye alın."
      }
    },
    explanations: {
      whySource: "Veriler şirketin web sunucularının otomatik tuttuğu loglar ve analytics altyapısından geldiği için **İkincil: Kurum İçi** veridir.",
      whyFormat: "Web sunucu logları ve clickstream verileri ham olarak JSON stream veya log dosyalarında saklandığı için **Yarı Yapılandırılmış (Semi-Structured)** formatındadır.",
      whyType: "Buradaki ana sütun ardışık tıklanan adımlar dizisidir (`AnaSayfa -> Ürün -> Sepet -> Ödeme`). Olayların kronolojik sırası incelendiği için bu veri türü **Ayrık Dizi (Sequential / Event Log)**'dur.",
      whyAnalytics: "Kullanıcıların sepeti neden terk ettiğini (dönüşüm hunisi düşüş nedenlerini) araştırdığı için **Tanısal (Diagnostic)** analitiktir. Süreci iyileştirmek için öneri getirmesi yönüyle **Reçetesel** de kabul edilir.",
      commonMistakes: "Web sitesi geçiyor diye 'Web Kazıma' seçmek! Oysa bu kendi şirketinizin kendi web sunucu loglarıdır."
    }
  },
  {
    id: 10,
    title: "Mağaza İçi Müşteri Hareket ve Reyon Duraklama Analizi",
    sector: "Fiziksel Perakende & Mekânsal Analitik",
    icon: "🏬",
    badge: "Kamera / Gözlem",
    context: "Bir hipermarket zincirinin amiral gemisi mağazasında tavan tipi termal optik hareket sensörleri ve eğitimli saha gözlemcileri tarafından toplanan müşteri duraklama süresi, raftan ürün alma ve koridor yoğunluk analizi verileri.",
    columns: ["Gözlem ID", "Reyon / Koridor", "Müşteri Segmenti", "Reyonda Kalış (sn)", "Raftan Ürün İnceleme", "Sepete Ekleme Oranı (%)", "Isı Haritası Skoru (1-10)", "Göz Hizası Raf Doluluğu", "Fiziksel Engel / Darboğaz", "Reyon Verimliliği"],
    rows: [
      ["OBS-301", "A-1 (Giriş / Fırın & Unlu)", "Sabah Alışverişçisi", "45 sn", "Evet (Hızlı)", "%88", "8.9 / 10", "Dolu (%95)", "Yok", "Çok Yüksek"],
      ["OBS-302", "B-3 (Kozmetik & Bakım)", "Genç Yetişkin", "180 sn", "Evet (Çoklu Karşılaştırma)", "%62", "7.2 / 10", "Dolu (%88)", "Kör Nokta / Aydınlatma Zayıf", "Yüksek"],
      ["OBS-303", "C-2 (Atıştırmalık & Bisküvi)", "Aile / Çocuklu", "95 sn", "Evet (Çocuk İstemi)", "%78", "9.4 / 10", "Dolu (%92)", "Palet Engeli (Koridor Dar)", "Yüksek"],
      ["OBS-304", "D-4 (Organik & Glutensiz)", "Sağlıklı Yaşam", "210 sn", "Evet (Etiket Okuma)", "%34", "3.8 / 10", "Kısmi (%60)", "Tabela Görünmüyor", "Düşük"],
      ["OBS-305", "E-1 (Temizlik & Deterjan)", "Ev Alışverişçisi", "65 sn", "Evet (Fiyat Odaklı)", "%70", "8.1 / 10", "Dolu (%90)", "Yok", "Yüksek"],
      ["OBS-306", "F-2 (Elektronik & Aksesuar)", "Teknoloji Meraklısı", "240 sn", "Hayır (Sadece İnceleme)", "%18", "4.2 / 10", "Kilitli Cam Dolap", "Görevli Personel Yok", "Çok Düşük"],
      ["OBS-307", "G-1 (Kasa Önü İtici Ürünler)", "Tüm Müşteriler", "120 sn", "Evet (Dürtüsel / Anlık)", "%91", "9.8 / 10", "Dolu (%98)", "Kuyruk Beklemesi", "Çok Yüksek"],
      ["OBS-308", "H-3 (Konserve & Bakliyat)", "Planlı Müşteri", "50 sn", "Evet (Doğrudan Seçim)", "%82", "6.5 / 10", "Dolu (%85)", "Yok", "Normal"],
      ["OBS-309", "D-5 (Dondurulmuş Gıda)", "Akşam Alışverişçisi", "40 sn", "Hayır (Hızlı Geçiş)", "%22", "5.1 / 10", "Cam Buğulanması", "Dolap Kapağı Zor Açılıyor", "Düşük"],
      ["OBS-310", "B-1 (Parfüm & Prestij)", "Hediye Arayan", "190 sn", "Evet (Tester Deneme)", "%29", "4.5 / 10", "Dolu (%80)", "Fiyat Etiketi Eksik", "Düşük"]
    ],
    answerKey: {
      dataSource: "Birincil: Gözlem",
      dataSourceAlternatives: ["İkincil: IoT (Sensör Şebekesi)", "Birincil: Saha Ölçümü"],
      structuralFormat: "Yapılandırılmış",
      dataType: "Mekânsal",
      dataTypeAlternatives: ["Kategorik/Karma", "Nicel Çok Boyutlu"],
      analyticsType: "Betimsel",
      analyticsTypeAlternatives: ["Reçetesel / Kuralcı"],
      vebb: {
        veri: "Mağaza içi optik hareket sensörleri ve gözlemcilerin tuttuğu reyon adı, kalış süresi (sn), raf inceleme davranışı, sepet ekleme yüzdesi ve ortam engelleri kayıtları.",
        bilgi: "Elektronik ve Dondurulmuş Gıda gibi reyonlarda müşteriler vakit geçirmesine rağmen dönüşüm %18-%22 seviyesinde kalmakta; buna karşılık Fırın ve Kasa Önü reyonlarında sepete atma oranı %88-%91'e ulaşmaktadır.",
        icgoru: "Düşük dönüşümlü reyonlarda temel engel ürün kalitesi değil, fiziksel erişim bariyerleridir: Kilitli dolap başında personelin bulunmaması, dondurucu cam buğusu ve eksik fiyat etiketleri müşteriyi vazgeçirmektedir.",
        bilgelik: "Elektronik reyonuna kablosuz çağrı butonu ve açık sergileme koruma telleri entegre edin, dondurucu cam kapaklarını buğu önleyici rezistanslı modellerle değiştirin ve prestij parfümlere anında QR kodlu fiyat ekranı yerleştirin."
      }
    },
    explanations: {
      whySource: "Veriler mağaza içindeki eğitimli gözlemciler ve optik kamera gözlem sensörleriyle doğrudan fiziksel davranış izlenerek toplandığından **Birincil: Gözlem**'dir. Tavan sensörleri yönüyle **İkincil: IoT** de kabul edilir.",
      whyFormat: "Gözlem parametreleri standart şablonda tablo haline getirildiğinden **Yapılandırılmış**'tır.",
      whyType: "Fiziksel mağaza krokisi ve koridor reyon planı üzerindeki konumsal yoğunluk (ısı haritası - heatmap) analiz edildiği için **Mekânsal (Spatial)** veri türüdür.",
      whyAnalytics: "Müşterilerin hangi reyonda ne kadar durakladığını ve nerede yoğunlaştığını tasvir edip haritalandırdığı için **Betimsel (Descriptive)** analitiktir. Raf yerleşimini yeniden düzenleme kararları yönüyle **Reçetesel** de kabul edilir.",
      commonMistakes: "'Anket' seçmek! Müşteriye soru sorulmamıştır; sadece fiziksel hareketleri ve reyon duraklamaları izlenmiştir."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CRITERIA_OPTIONS, SCENARIOS };
}
