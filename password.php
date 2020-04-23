<?php 
//for the class
public $length;
public $pass;


public static function  generateRandomString($length, $pass) {
        
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
   
    return $randomString;
  }



//comesss from the user password $_POST['PASS']
$pass = 'comfort777@@';
$length = strlen($pass);

$password = Article::generateRandomString($length, $pass);
 

?>