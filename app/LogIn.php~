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
</head>
<body>
<fieldset id="logIn_fldst_top">
<legend><h1 id="logIn_h1">LOGiN TO ADMITTING AREA</h1></legend>

<form method="POST" >
	<div id="user">
	USERNAME:
	<input type="text" name="username" id="username"/>
	
	<br /><br />
	
	PASSWORD:
	<input type="password" name="password" id="password"/>
	
	<br /><br /><br />
	
	<input type="submit" value="LOGIN" id="login_button"/>
	<br /><br />
	
	<div id="forErrMsg">
	<?php
		if(isset($errMsg)) echo $errMsg;
	?>
	<div>
	</div>
</form>
</fieldset>
</body>
</html>
