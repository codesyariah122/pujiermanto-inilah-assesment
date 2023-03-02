<?php
$data = [];

function check_valid_string($string) {
 return ctype_alpha($string);
}

function process_input($request) {
    if(isset($request['nama'])) {
      if(check_valid_string($_POST['nama'])):
        var_dump("Ok");
      else:
        show_alert("error");
      endif;
    }
}

function show_alert($type){
  switch($type):
    case "error":
    echo "
      <script>
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      </script>";
    break;
    
    case "success":
      echo "
      <script>
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        </script>
      ";
    break;
    
    case "failed":
      echo "
      <script>
        Swal.fire(
          'The Internet?',
          'That thing is still around?',
          'question'
        )
        </script>
      ";
      break;
      
      default:
        echo "no alert";
    endswitch;
}