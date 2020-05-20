
   
   <?php
    
    $author = $_POST['author'];
    $text = $_POST['comment'];
    $id = substr($_SERVER['HTTP_REFERER'],-1);
    $date = date("m.d.y");
	$routeId=(int)$id;
    
    require_once 'connect.php';
    
    if($connect){
        echo 'Success';
    }else{
        echo 'Error';
    }
    
    $sql = "INSERT INTO `add_comments` (`id`,`routeId`, `comment`, `author`,`date`) VALUES ('','$routeId', '$text', '$author','$date')";
    if (mysqli_query($connect, $sql)) {
      echo "Ваш комментарий добавлен.";
	  echo $id;
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);
    ;?>
