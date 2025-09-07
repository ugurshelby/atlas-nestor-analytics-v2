# Atlas Nestor Analytics Dashboard

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ugurshelby/atlas-nestor-analytics)

## 📊 Proje Açıklaması
Atlas Nestor'un dijital pazarlama performansını analiz eden kapsamlı dashboard projesi. Tüm platformlardan gelen verileri tek bir yerde toplayarak detaylı analiz ve öneriler sunar.

## 🌐 Canlı Demo
- **Vercel Deploy**: [atlas-nestor-analytics.vercel.app](https://atlas-nestor-analytics.vercel.app)
- **GitHub Repository**: [github.com/ugurshelby/atlas-nestor-analytics](https://github.com/ugurshelby/atlas-nestor-analytics)

## ✨ Özellikler
- 🎨 **Modern Dark Mode Tasarım** - Profesyonel ve göz yormayan arayüz
- 📱 **Tam Responsive** - Tüm cihazlarda mükemmel görünüm
- 📊 **PDF İndirme** - Genel analiz raporlarını PDF olarak indirme
- 🔍 **AlsoAsked Entegrasyonu** - Kullanıcı sorguları analizi
- 🎯 **SEO Optimizasyonu** - Arama motorları için optimize edilmiş
- ⚡ **Hızlı Yükleme** - Optimize edilmiş performans

## 🗂️ Klasör Yapısı

```
Atlas Nestor Analytics/
├── 📁 pages/                    # HTML sayfaları
│   ├── index.html              # Ana dashboard sayfası
│   ├── google-ads.html         # Google Ads analizi
│   ├── instagram.html          # Instagram analizi
│   ├── linkedin.html           # LinkedIn analizi
│   ├── email-marketing.html    # E-posta pazarlama analizi
│   ├── youtube.html            # YouTube analizi
│   ├── seo.html                # SEO analizi
│   ├── linktree.html           # Linktree analizi
│   ├── also-asked.html         # Also Asked analizi
│   ├── google-analytics.html   # Google Analytics analizi
│   └── ubersuggest.html        # Ubersuggest analizi
├── 📁 assets/                   # CSS, JS ve diğer varlıklar
│   ├── styles.css              # Ana stil dosyası
│   └── script.js               # JavaScript dosyası
├── 📁 data/                     # Tüm veri dosyaları
│   └── Rapor&Veri/            # Orijinal veri klasörü
│       ├── Google ADS/         # Google Ads raporları
│       ├── Google Analytics/   # GA4 raporları
│       ├── Instagram/          # Instagram raporları
│       ├── LinkedIn/           # LinkedIn raporları
│       ├── Mail/               # E-posta raporları
│       ├── YouTube/            # YouTube raporları
│       ├── SEO Spider/         # SEO Spider raporları
│       ├── Ubersuggest/        # Ubersuggest raporları
│       ├── Google Search Console/ # GSC raporları
│       ├── Linktree/           # Linktree raporları
│       └── Alsoasked/          # Also Asked raporları
├── 📁 docs/                     # Dokümantasyon
├── 📁 archive/                  # Eski/backup dosyalar
└── README.md                    # Bu dosya
```

## 🚀 Hızlı Başlangıç

### Yerel Geliştirme
```bash
# Repository'yi klonlayın
git clone https://github.com/yourusername/atlas-nestor-analytics.git

# Proje klasörüne gidin
cd atlas-nestor-analytics

# Basit HTTP sunucusu başlatın (Python 3)
python -m http.server 8000

# Veya Node.js ile
npx serve .

# Tarayıcıda açın
# http://localhost:8000/pages/index.html
```

### Vercel ile Deploy
```bash
# Vercel CLI yükleyin
npm i -g vercel

# Projeyi deploy edin
vercel

# Veya GitHub'dan otomatik deploy
# GitHub repository'sini Vercel'e bağlayın
```

## 📖 Kullanım

1. **Ana Sayfa**: `pages/index.html` - Tüm platformların genel bakışı
2. **Platform Analizleri**: Her platform için ayrı detaylı analiz sayfaları
3. **PDF İndirme**: Genel analiz sayfasından PDF rapor indirme
4. **Veri Kaynakları**: `data/Rapor&Veri/` klasöründe tüm ham veriler

## 📈 Entegre Edilen Platformlar

### ✅ Tamamen Entegre Edilenler:
- **Google Ads** - Kampanya performansı, anahtar kelime analizi
- **Instagram** - Reklam performansı, etkileşim analizi
- **LinkedIn** - Profesyonel ağ performansı
- **E-posta Pazarlama** - Kampanya analizi, dönüşüm takibi
- **YouTube** - Video performansı, kanal analizi
- **SEO** - Ubersuggest, SEO Spider, Google Search Console
- **Linktree** - Link performansı, dönüşüm analizi
- **Also Asked** - Kullanıcı sorgu analizi
- **Google Analytics** - Web sitesi trafik analizi

### 📊 Ana Metrikler:
- **Toplam Dönüşüm**: 133 (Linktree + E-posta)
- **Toplam Kullanıcı**: 1,933 (Google Analytics)
- **Toplam Görüntüleme**: 4,095 (Google Analytics)
- **Anahtar Kelime**: 164 (Google Ads)
- **Arama Terimi**: 3,195 (Google Ads)

## 🎨 Tasarım Özellikleri

- **Dark Mode** - Karanlık tema odaklı tasarım
- **Responsive** - Mobil uyumlu tasarım
- **Modern UI** - Profesyonel ve temiz arayüz
- **Tutarlı Renkler** - Her platform için özel renk teması
- **Hover Efektleri** - İnteraktif kullanıcı deneyimi

## 🔧 Teknik Detaylar

- **HTML5** - Semantik yapı
- **CSS3** - Modern stil özellikleri (CSS Grid, Flexbox)
- **JavaScript** - İnteraktif özellikler ve PDF oluşturma
- **Font Awesome** - İkon kütüphanesi
- **jsPDF** - PDF oluşturma kütüphanesi
- **html2canvas** - HTML'den görüntü oluşturma
- **Responsive Grid** - Esnek düzen sistemi
- **Dark Mode** - CSS custom properties ile tema sistemi

## 📝 Güncelleme Notları

- **v1.0** - Temel dashboard yapısı
- **v1.1** - Tüm platformlar entegre edildi
- **v1.2** - Anahtar kelime analizi eklendi
- **v1.3** - Proje düzenlendi ve klasör yapısı oluşturuldu
- **v1.4** - Modern header tasarımı ve renk tutarlılığı
- **v1.5** - PDF indirme özelliği eklendi
- **v1.6** - AlsoAsked sorgu ağacı entegrasyonu
- **v1.7** - GitHub ve Vercel deploy hazırlığı

## 🎯 Gelecek Planları

- [ ] Otomatik veri güncelleme sistemi
- [ ] Daha detaylı raporlama
- [ ] Export özellikleri (Excel, CSV)
- [ ] Dashboard özelleştirme
- [ ] Kullanıcı yorumları sistemi
- [ ] API entegrasyonu

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Atlas Nestor** - [@atlasnestor](https://twitter.com/atlasnestor)
- **Proje Linki** - [https://github.com/yourusername/atlas-nestor-analytics](https://github.com/yourusername/atlas-nestor-analytics)

---

**Atlas Nestor Analytics Dashboard** - Dijital pazarlama verilerinizi tek noktadan yönetin! 🚀
