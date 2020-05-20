
	<?php 
	session_start();
	
	class userAuth {
		public $user_login = 'Guest';
		public $access = '';
		public $email = '';
		public $user_id = false;
	}
	
	$user_non = new userAuth;
	$user_sess=new userAuth;
	
	require_once 'connect.php';
    
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') 
	{
		$inputJSON = file_get_contents("php://input");
		//echo json_decode($inputJSON);
		//$data = json_decode($inputJSON);
		$decode=json_decode($inputJSON,true);

		if (empty($decode['username']))
		{
			echo 'Вы не ввели логин';
		}
		elseif (empty($decode['password'])) 
		{
			echo 'Вы не ввели пароль';
		}
		else 
		{    
			$login = $decode['username'];
			$password = md5($decode['password']);
			$user = mysqli_query($connect, "SELECT * FROM `add_users` WHERE `user_login` = '$login' AND `user_password` = '$password'");
			$sess_user = mysqli_fetch_array($user);		
			if (empty($sess_user['id'])) 
			{
				echo 'Введенные данные не верны';
			}
			else 
			{
				$_SESSION['password'] = $password; 
				$_SESSION['username'] = $login; 
				$_SESSION['id'] = $sess_user['id'];
				$_SESSION['access'] = $sess_user['access'];
				$_SESSION['email'] = $sess_user['user_email']; 				
								
				
				$user_sess->user_login=$_SESSION['username'];
				$user_sess->access=$_SESSION['access'];
				$user_sess->email=$_SESSION['email'];
				
				$user_sess->user_id= true;
				echo json_encode($user_sess);		
			}     
		}
	}else{
		echo json_encode($user_non);
}
;?>
