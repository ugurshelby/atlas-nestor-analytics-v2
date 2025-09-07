# 🚀 GitHub & Vercel Deploy Rehberi

Bu rehber, Atlas Nestor Analytics Dashboard projesini GitHub'a yükleyip Vercel ile deploy etme sürecini adım adım açıklar.

## 📋 Ön Gereksinimler

- GitHub hesabı
- Git yüklü olması
- Vercel hesabı (ücretsiz)

## 🔧 1. GitHub'a Yükleme

### Adım 1: Git Repository Oluşturma
```bash
# Proje klasöründe terminal açın
cd "C:\Users\ts\.projects\Atlas Nestor Analytics"

# Git repository başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit yapın
git commit -m "Initial commit: Atlas Nestor Analytics Dashboard v1.7"
```

### Adım 2: GitHub Repository Oluşturma
1. [GitHub.com](https://github.com) adresine gidin
2. "New repository" butonuna tıklayın
3. Repository adını girin: `atlas-nestor-analytics`
4. "Public" seçin (ücretsiz Vercel deploy için)
5. "Create repository" butonuna tıklayın

### Adım 3: Local Repository'yi GitHub'a Bağlama
```bash
# GitHub repository URL'ini ekleyin (kendi kullanıcı adınızla değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/atlas-nestor-analytics.git

# Ana branch'i main olarak ayarlayın
git branch -M main

# GitHub'a push edin
git push -u origin main
```

## 🌐 2. Vercel ile Deploy

### Yöntem 1: GitHub Entegrasyonu (Önerilen)

1. [Vercel.com](https://vercel.com) adresine gidin
2. "Sign up" ile GitHub hesabınızla giriş yapın
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi seçin: `atlas-nestor-analytics`
5. "Import" butonuna tıklayın
6. Vercel otomatik olarak ayarları algılayacak:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (boş bırakın)
   - **Output Directory**: (boş bırakın)
7. "Deploy" butonuna tıklayın

### Yöntem 2: Vercel CLI

```bash
# Vercel CLI yükleyin
npm install -g vercel

# Proje klasöründe
vercel

# Soruları yanıtlayın:
# - Set up and deploy? Y
# - Which scope? (kendi hesabınızı seçin)
# - Link to existing project? N
# - What's your project's name? atlas-nestor-analytics
# - In which directory is your code located? ./
```

## ⚙️ 3. Vercel Konfigürasyonu

### Otomatik Deploy Ayarları
Vercel otomatik olarak şu ayarları yapacak:
- **Framework**: Static Site
- **Build Command**: (gerekli değil)
- **Output Directory**: (otomatik algılanır)
- **Install Command**: (gerekli değil)

### Custom Domain (Opsiyonel)
1. Vercel dashboard'da projenizi seçin
2. "Settings" > "Domains" sekmesine gidin
3. Kendi domain'inizi ekleyin
4. DNS ayarlarını yapın

## 🔄 4. Güncelleme Süreci

### Kod Değişikliklerini Deploy Etme
```bash
# Değişiklikleri commit edin
git add .
git commit -m "Update: Yeni özellik eklendi"

# GitHub'a push edin
git push origin main

# Vercel otomatik olarak yeni deploy başlatacak
```

### Manuel Deploy
```bash
# Vercel CLI ile
vercel --prod
```

## 📊 5. Performans Optimizasyonu

### Vercel Analytics
1. Vercel dashboard'da projenizi seçin
2. "Analytics" sekmesine gidin
3. "Enable Vercel Analytics" butonuna tıklayın

### Performance Monitoring
- Vercel otomatik olarak Core Web Vitals ölçer
- Real User Monitoring (RUM) sağlar
- Edge Network kullanır (hızlı yükleme)

## 🛠️ 6. Sorun Giderme

### Yaygın Sorunlar

**Problem**: 404 hatası alıyorum
**Çözüm**: `vercel.json` dosyasında routing ayarlarını kontrol edin

**Problem**: CSS/JS dosyaları yüklenmiyor
**Çözüm**: Dosya yollarını kontrol edin (relative paths kullanın)

**Problem**: PDF indirme çalışmıyor
**Çözüm**: External CDN linklerinin çalıştığını kontrol edin

### Debug Modu
```bash
# Vercel CLI ile debug
vercel --debug
```

## 📈 7. Monitoring ve Analytics

### Vercel Dashboard
- Deploy geçmişi
- Performance metrikleri
- Error tracking
- Function logs

### GitHub Actions (Opsiyonel)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 8. Sonuç

Deploy işlemi tamamlandıktan sonra:
- ✅ Projeniz canlı olarak erişilebilir
- ✅ Her GitHub push'unda otomatik deploy
- ✅ Global CDN ile hızlı yükleme
- ✅ HTTPS sertifikası otomatik
- ✅ Custom domain desteği

**Canlı URL**: `https://atlas-nestor-analytics.vercel.app`

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- [Vercel Dokümantasyonu](https://vercel.com/docs)
- [GitHub Dokümantasyonu](https://docs.github.com)
- [Vercel Discord](https://vercel.com/discord)
