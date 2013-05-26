<?php
	class baseDAO {
		protected $username = "student1";
		protected $password = "password";
		protected $db_name = "RUBRICO_HS";
		protected $dbh = null;
		
		function openConn(){
			$this->dbh = new PDO("mysql:host=localhost;dbname=".$this->db_name, $this->username, $this->password);
		}
		function closeConn(){
			$this->dbh = null;
		}
	}
?>
