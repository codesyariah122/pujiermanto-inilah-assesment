#### Jawaban untuk soal no. 1 / backend

Error 502  Sendiri bad gateway memiliki beragam bentuk dan ukuran. Berikut contohnya:
- Temporary Error (502)
- Error 502
- HTTP Error 502 Bad Gateaway
- 502 Server Error: The server encountered a temporary error and could not complete your request
- 502 - Web server received an invalid response while acting as a gateway or proxy server
- HTTP 502
- 502 Service Temporarily Overloaded
- 502 Bad Gateway Nginx

**Untuk website yang di build dengan CMS Wordpress**
> Bisa menambahkan script berikut di bagian ```wp-config```  
```php
define( 'WP_DEBUG', true ); 
define( 'WP_DEBUG_LOG', true ); 
define( 'WP_DEBUG_DISPLAY', false );
```  

**Bisa juga dengan cara Flush DNS di sisi Server**
