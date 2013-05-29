<?php
session_start();

	include 'dao/myUserDAO.php';
	
		$action = new myUserDAO();
			if(!isset($_SESSION['username'])){
				if(isset($_POST['username'])){
					$username = $_POST['username'];
					$password = $_POST['password'];
						if($action->login($username, $password)){
						
							$_SESSION['username'] = $action->getUser($username, $password);
							header('Location: admin.php');
						}
						$errMsg = "...oops! wrong username and/or password";
				}
			}else {
				header('Location: admin.php');
			}
?>

<!DOCTYPE html>
<html>
<title>Login | ADMITTING AREA</title>
<link rel="shortcut icon" href="images/top.ico" />
<head>
<script src="js/jquery-1.8.2.min.js"></script>
<link rel="stylesheet" href="css/myCSS.css">
<script src="js/mySystemJScript.js"></script>
<script src="bootstrap/js/bootstrap.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>


<link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.responsive.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.responsive.min.css" />

</head>
<body>
<div id="Login_div">
<legend><a href="home.php" id="back_home"><i class="icon-home icon-black"></i></a><h2 id="logIn_h1">Login to Admin</h2></legend>
<form method="POST" >
	<div id="user">
	<input type="text" name="username" id="username" placeholder="Username"/>
	
	<br />
	<input type="password" name="password" id="password" placeholder="Password"/>
	
	<br />
	<button class="btn btn-primary" id="login_button">LOGIN</button>
	<br /><br />
	
	<div id="forErrMsg">
	<?php
		if(isset($errMsg)) echo "<h5>".$errMsg."</h5>";
	?>
	<div>
	</div>
</form>
<div>
</body>
</html>
