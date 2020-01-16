<?php

$to      = 'ppawelpiorkowskii@gmail.com';
$name    = $_POST['name'];
$mail    = $_POST['mail'];
$subject = 'Nowy e-mail od' . $name . '(' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . '(' . $email . ')';
$headers = 'Content-Type: text/html: charsetutf-8\r\n';

mail($to, $subject, $message, $headers)

?>