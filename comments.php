
<?php

	require_once 'connect.php';
	
  $query = 'SELECT * FROM `add_comments`';
  $result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

  $comments = [];


  while($row = mysqli_fetch_assoc($result)) {
    $comments[] = $row;
  }

  echo json_encode($comments);

?>