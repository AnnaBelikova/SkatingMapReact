
<?php

  require_once 'connect.php';
	
	

  
  $query = 'SELECT * FROM `add_routes`';
  $result = mysqli_query($connect, $query) or die('Запрос не удался: ' . mysql_error());

 
  $routes = [];

  
  while($row = mysqli_fetch_assoc($result)) {
    $routes[] = $row;
  }

  
  echo json_encode($routes);

?>
