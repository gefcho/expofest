<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Никаких аргументов не предусмотрено!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'by_expo@mail.ru'; 
$email_subject = "Контактная форма Expofest.by: $name";
$email_body = "Вы получили новое сообщение от контактной формы Expofest.by.\n\n"."Вот подробности:\n\nИмя: $name\n\nEmail: $email_address\n\nСообщение:\n$message";
$headers = "From: Expofest.by\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>