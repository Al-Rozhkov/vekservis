<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

if ($_SERVER["CONTENT_TYPE"] == 'application/json') {
  $data = json_decode(file_get_contents('php://input'), true);

  if (!empty($data["name"]) && !empty($data["contact"]) && !empty($data["model"])) {
    // var_dump($data);

    $to      = 'rozhkov-aa@yandex.ru';
    $subject = 'Заказ на сайте vekservis.ru';
    $message = 'Имя: ' . strip_tags($data['name']) . "\r\n" .
      'Контактная информация: ' . $data['contact'] . "\r\n" .
      'Модель: ' . $data['model'];
    $headers = 'From: noreply@vekservis.ru' . "\r\n" .
      'Reply-To: noreply@vekservis.ru' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }  
}
