<?php
    $msg_box = "";
    $errors = array();
    if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_phone'] == "")   $errors[] = "Поле 'Ваш телефон' не заполнен!";
 
    if(empty($errors)){     
        $message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
        $message .= "Телефон пользователя: " . $_POST['user_phone'] . "<br/>";     
        send_mail($message);
        $msg_box = "<span'>Ваше сообщение успешно отправлено!</span>";
    }else{
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    function send_mail($message){
        $mail_to = "monkeysbrain@yandex.ru"; 
        $subject = "Письмо с обратной связи";
         
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>