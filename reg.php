
	<?php 
	require_once 'connect.php';
   
	
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		if (empty($_POST['username'])) 
		{
			echo 'Вы не ввели Логин';
		}          
		elseif (empty($_POST['email'])) 
		{
			echo  'Вы не ввели почту';
		}           
		elseif (empty($_POST['password'])) 
		{
			echo  'Вы не ввели пароль';
		}
		elseif (empty($_POST['repeatPassword'])) 
		{
			echo  'Вы не повторили пароль';
		}
		elseif (($_POST['repeatPassword'])!== ($_POST['password'])) 
		{
			echo  'Пароль не совпал';
		}
		else{
		
				$login = $_POST['username'];
				$email = $_POST['email'];
				$password = $_POST['password'];
				$passEncoded = md5($password);
				
				$sql = "INSERT INTO `add_users` (`user_login`, `user_email`, `user_password`) VALUES ('$login', '$email', '$passEncoded')";
				if (mysqli_query($connect, $sql)) {
				  echo "Вы зарегистрировались";
				} else {
				  echo "Error: " . $sql . "<br>" . mysqli_error($connect);
				}
		}
		
	}else{
		echo 'Что-то не так';
	}
	
    mysqli_close($connect);

;?>
