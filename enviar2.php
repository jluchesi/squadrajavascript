<?php
$nombre = $_POST['nome'];
$mail = $_POST['email'];
$empresa = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Esta mensagem foi enviada por " . $nome . ",\r\n";
$mensaje .= "Seu e-mail: " . $mail . " \r\n";
$mensaje .= "Mensagem: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Data do envio " . date('d/m/Y', time());

$para = 'squadraacrilica@gmail.com';
$asunto = 'Contato Squadra Acrilica';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>