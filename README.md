[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Xg2jV1i2)


# 🎬 AY Movies - Modern Sinema Kütüphanesi

> **Web Teknolojileri Dersi Dönem Projesi**

**AY Movies**, modern web teknolojileri (HTML5, CSS3, ES6+) kullanılarak geliştirilmiş, **Single Page Application (SPA)** mantığıyla çalışan, dinamik ve kullanıcı dostu bir film inceleme platformudur.

## 🔗 Canlı Demo (Live Link)
Projenin çalışan son halini aşağıdaki linkten inceleyebilirsiniz:
👉 **[BURAYA GITHUB PAGES LINKINI YAPIŞTIR]**

---

## 🚀 Proje Hakkında
Bu proje, sunucu taraflı bir dil (Back-end) kullanmadan, tamamen **istemci taraflı (Client-Side)** teknolojilerle geliştirilmiştir. Amaç; veri çekme, işleme, listeleme ve kullanıcı etkileşimi (favorileme vb.) gibi temel web yeteneklerini sergilemektir.

### 🌟 Öne Çıkan Özellikler
* **Dinamik Veri Yönetimi:** Tüm film verileri yerel bir **JSON** dosyasından `fetch API` kullanılarak asenkron yapıda çekilmektedir.
* **Gelişmiş Filtreleme:** Kullanıcılar anlık olarak **film adı** araması yapabilir veya **kategorilere** göre filtreleme sağlayabilir.
* **Favori Sistemi (LocalStorage):** Beğenilen filmler tarayıcı hafızasına kaydedilir. Sayfa yenilense bile veriler kaybolmaz.
    * *Yeni Özellik:* "Tüm Favorileri Sil" butonu ile liste tek seferde temizlenebilir.
* **Responsive Tasarım:** **CSS Grid** ve **Flexbox** yapıları sayesinde Mobil, Tablet ve Masaüstü cihazlarla %100 uyumludur.
* **Modern Arayüz (UI/UX):** Karanlık mod (Dark Theme) tasarımı, film kartlarında "Hover" efektleri ve modern ikonlar kullanılmıştır.

### ✨ Bonus Özellikler (Extra Credits)
Projede standart gereksinimlerin üzerine çıkılarak aşağıdaki özellikler eklenmiştir:
1.  **CSS Animasyonları:** Sayfa yüklenirken kartlar `keyframes` animasyonu ile süzülerek gelir (Fade-in).
2.  **Modal Efektleri:** Detay pencereleri (Pop-up) özel geçiş efektleriyle (Transition) açılır.
3.  **Erişilebilirlik (A11y):** Klavye kullanıcıları (TAB tuşu) için özel odaklanma (Focus Ring) stilleri eklenmiştir.

---

## 🛠 Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
| :--- | :--- |
| **HTML5** | Semantik etiket yapısı (`<header>`, `<main>`, `<nav>`) |
| **CSS3** | Sayfa düzeni (Grid/Flexbox), Animasyonlar, Responsive Tasarım |
| **JavaScript (ES6+)** | DOM Manipülasyonu, Olay Dinleyicileri, Mantıksal İşlemler |
| **Fetch API** | JSON verisini asenkron (`async/await`) olarak okuma |
| **LocalStorage** | Veri kalıcılığını (Persistent Data) sağlama |

---



---

**Geliştirici:** Ayça Nur Seferoğlu
**Ders:** Web Teknolojileri 