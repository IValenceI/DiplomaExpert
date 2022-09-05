<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5655472507:AAGSNRVZsgGhn2w7BXlPFqRYqKwir4sZ2Lk";

//Сюда вставляем chat_id
$chat_id = "-781239993";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
	$selectOption = ($_POST['select']);
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
	$date = ($_POST['date']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
	'Тип:' => $selectOption,
        'Тема' => $name,
		'Дата:' => $date,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Дякую! Ваша заявка прийнята. Ми зв᾿яжемося з вами найближчим часом.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Щось пішло не так. Спробуйте надіслати форму ще раз.');
    }
}

?>