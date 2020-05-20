
   
   <?php

    $title = $_POST['news_title'];
    $text = $_POST['news_text'];
    
    require_once 'connect.php';
    
    if($connect){
        echo 'Success';
    }else{
        echo 'Error';
    }
	
	
	if(  is_uploaded_file($_FILES["news_photo"]["tmp_name"])  )
    {
		$new_path = $_SERVER['DOCUMENT_ROOT']."/assets/images/"  . $_FILES["news_photo"]["name"];
		$sql_path = "/assets/images/"  . $_FILES["news_photo"]["name"];
		
		move_uploaded_file
		(
			$_FILES["news_photo"]["tmp_name"],
			$new_path
		);
		
	}else{
		echo "Error";
	}
	
    $sql = "INSERT INTO `add_news` (`author`, `title`, `text`,`image` ) VALUES ('Anna', '$title', '$text','$sql_path')";
    if (mysqli_query($connect, $sql)) {
      echo "Ваша новость добавлена";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connect);
    }
    mysqli_close($connect);
    ;?>
