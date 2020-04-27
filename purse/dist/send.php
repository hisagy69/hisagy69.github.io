<?php
$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];

  // Load Composer's autoloader
  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/SMTP.php';
  require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();//могут быть разные методы подключения, если не работает, надо проверить

try {
  $mail->CharSet = 'utf-8';
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                         // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'mailtestglo111@gmail.com';                     // SMTP username
    $mail->Password   = 'Passwd111';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('mailtestglo111@gmail.com', '');
    $mail->addAddress('sinegamy11@gmail.com', 'Joe User');     //добавляю ящик заказчика Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, </br>Телефон: ${userPhone}";

    if ($mail->send()) {
      echo "ok";
    } else {
      echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
