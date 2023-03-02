#### Jawaban untuk soal no. 2 / backend
Kendala migrasi ke base api, untuk kendala access sepengalaman saya tida terlalu rumit jika menggunakan sebuah framework biasanya terdapat konfigurasi untuk menangani ```cors``` atau jalur access dalam hal ini menangani kemanan transaksi data melalui metode HTTP Request. 
sebagai contoh di dalam konfigurasi ```cors``` saya akan menambahkan bagian ini :  

```Access-Control-Allow-Origin``` namun biasanya dengan menggunakan framework seperti laravel atau codeigniter sudah terdapat konfigurasi untuk penanganan cors.

#### Content_Type
Untuk akses dari media atau technology lain seperti mobile phone maupu web client response data akan dikembalikan dalam bentuk ```JSON```, sehingga request dari client biasanya membutuhkun header dengan key ```Content-Type: application/json```