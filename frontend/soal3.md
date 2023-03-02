#### Jawaban untuk soal no. 3 / frontend
**Untuk Catatan:**
>Portal News inilah.com dari sisi UI/UX menurut saya sudah sangat baik sekali, sesuai dengan fungsi sebagai portal berita dengan tampilan design yang responsive dan tata letak yang bagus menurut saya.

> Sepengalaman saya dalam menerapkan prinsip responsif pada tampilan aplikasi web saya memulai dari device / piranti berukuran kecil terlebih dahulu, dengan batasan-batasan yang dimilikinya.

> Konsep terpenting dalam penerapan tampilan responsif adalah fluiditas dan proporsionalitas, halaman dan content dalam sebuah halaman harus dapat menyesuaikan setiap ukuran pada layar yang berbeda-beda.

Contoh: 
> kita ingin membuat sebuah elemen div dengan lebar sesuai dengan **ViewPort** pada browser sesuai setup code html di frontendnya. maka saya akan menuliskan css seperti ini :

***Notes : penggunaan unit PX tidak disarankan dalam kasus ini, karena unit PX sebaiknya digunakan untuk nilai yang tidak berubah / constant***
```css
.container {
    width: 100%;
    min-height: 200px;
}
```  

#### Typography units
dalam penerapan font, kita perlu menggunakan satuan relatif sepert : 
**em, rem, vw dan vh**  

#### Mengatur ViewPort
menggunakan meta tag di bagian Head sebuah code ```.html```  
```html
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```
#### Set Breakpoint pada bagian css(Styling)  
contoh penerapan media breakpoint di css: 

misal code html nya gini:
```html
<div class="container">
   <div class="box dark_blue"></div>
   <div class="box light_blue"></div>
   <div class="box green"></div>
   <div class="box red"></div>
   <div class="box orange"></div>
</div>
```
***Untuk css nya saya menerapkan medai queries seperti ini***
```css
html, body {
   margin: 0;
   padding: 0;
}
 
.container {
   display: flex;
   flex-wrap: wrap;
}
 
.box {
   min-height: 150px;
   width: 100%;
}
 
/*untuk layar device berukuran kecil*/
@media screen and (min-width: 450px) {
   .light_blue, .green {
       width: 50%
   }
}
 
/*untuk layar device berukuran sedang*/
@media screen and (min-width: 550px) {
   .red {
       width: 33%;
   }
 
   .orange {
       width: 67%;
   }
}
 
/*untuk layar device berukuran besar*/
@media screen and (min-width: 800px) {
   .container {
       width: 800px;
       margin-left: auto;
       margin-right: auto;
   }
}
```