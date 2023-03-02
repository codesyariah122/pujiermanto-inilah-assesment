<?php
session_start();

function check_valid_string($val) {
 return ctype_alpha(str_replace(' ', '', $val));
}

function check_length_string($val) {
  return strlen($val) > 3 ? true : false;
}

function process_input($request) {
    if(isset($request['kirim'])) {

      if(empty($request['nama'])):
        show_result("error");
      else:

        if(check_valid_string($request['nama'])):

          if(check_length_string($request['nama'])):
            $capitalize_name = ucwords($request['nama']);
            $data = [
              'nama' => $request['nama'],
              'message' => "Hallo, {$capitalize_name}, selamat datang di inilah.com portal news"
            ];
            create_session($data);
            show_result("success");
          else:
            show_result('wrong');
          endif;

        else:
          show_result("failed");
        endif;

      endif;
    }
}

function show_result($type){
  switch($type):
    case "error":
      require_once dirname(__FILE__) . '/partials/error.php';
    break;
    
    case "success":
      require_once dirname(__FILE__). '/partials/success.php';
    break;
    
    case "failed":
      require_once dirname(__FILE__). '/partials/failed.php';
    break;

    case "wrong":
      require_once dirname(__FILE__). '/partials/wrong.php';
    break;

      default:
        echo "no condition";
  endswitch;
}


function create_session($data) {
  $_SESSION['nama'] = htmlspecialchars((ucwords($data['nama'])));
  $_SESSION['message'] = $data['message'];
}