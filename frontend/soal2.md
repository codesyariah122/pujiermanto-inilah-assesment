#### Jawaban untuk soal no. 2 / frontend
**Untuk Catatan:**
>Portal News inilah.com dari sisi UI/UX menurut saya sudah sangat baik sekali, sesuai dengan fungsi sebagai portal berita dengan tampilan design yang responsive dan tata letak yang bagus menurut saya.

1. Pastinya mempunyai akun adsense nya terlebih dahulu daftar adsense di link : https://adsense.google.com/intl/id_id/start/
2. Setelah mendaftar lanjut inject script yang telah di sediakan dari google adsense yang biasanya berupa source javascript, contoh: 

```html
<!-- setup google adsense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-3504444534054185",
    enable_page_level_ads: true
  });
</script>
```

3. Menambahkan tracking tools seperti google analytics
4. Menambahkan tag manager tools seperti google tag manager
5. Menambahkan meta tag / meta SEO di bagian ```<head>``` Sebuah halaman website, ada beberbagai macam meta untuk optimasi website dengan layanan adsense antara lain: 

```php
<link rel="canonical" href="@yield('canonical')" />
<meta name="description" content="@yield('meta_desc')">
<meta name="keywords" content="@yield('meta_key')">
<meta name="author" content="@yield('meta_author')">
<meta property="og:url" content="@yield('og_url')">
<meta property="og:type" content="@yield('og_type')" />
<meta property="og:site_name" content="@yield('og_site_name')" />
<meta property="og:title" content="@yield('og_title')">
<meta property="og:description" content="@yield('og_desc')">
<meta property="og:image" content="@yield('og_image')">
<meta property="og:image:width" content="@yield('og_image_width')" />
<meta property="og:image:height" content="@yield('og_image_height')" />
```
