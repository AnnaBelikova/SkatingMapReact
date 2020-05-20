<?php

  // Подключились к MySQL БД
	require_once 'connect.php';
	
	

  // Отправляем запрос к базе данных, на получение новостей
  $query = 'SELECT * FROM `add_users`';
  $result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

  // Тут будем хранить список новостей
  $users = [];

    // Вносим все новоcти из БД в переменную
  while($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
  }

  // Возвращаем JSON со списоком новостей
  echo json_encode($users);

?>