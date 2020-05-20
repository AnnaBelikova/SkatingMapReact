
<?php

	require_once 'connect.php';
  $query = 'SELECT * FROM `add_news`';
  $result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

  $news = [];

  while($row = mysqli_fetch_assoc($result)) {
    $news[] = $row;
  }
  echo json_encode($news);

?>
