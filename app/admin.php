<?php
	session_start();
	
	if (!isset($_SESSION['username'])){
		header('Location: home.php');
	} else {
		$username = $_SESSION['username'];
	}
?>
<!DOCTYPE html>
<html>
<title>Administration</title>
<link rel="shortcut icon" href="images/top.ico" />
<head>

<meta http-equiv="refresh" content="600">

<script src="js/jquery-1.8.2.min.js"></script>
<script src="js/mySystemJScript.js"></script>
<script src="js/jquery-ui-1.9.0.custom.min.js" ></script>
<script src="bootstrap/js/bootstrap.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="js/jquery-ui.js" ></script>

<link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.responsive.css" />
<link rel="stylesheet" href="bootstrap/css/bootstrap.responsive.min.css" />

<link rel="stylesheet" href="css/jquery-ui-1.9.0.custom.min.css" />
<link rel="stylesheet" href="css/myCSS.css" />

</head>

<body>
<a href="LogOut.php"><img src="images/logout.png" id="logOut" title="Sign Out"/></a>
<br/><h1 id="logo2">My Hospital System</h1>

<br /><br />
<div class="tabbable tabs-left"  id="tbl">
	<ul class="nav nav-tabs" id="myTab">
		<li class="active"><a href="#records" data-toggle="tab">List of Admitted Patients</a></li>
		<li><a href="#hosp_dep" data-toggle="tab">Hospital Department</a></li>
	</ul>

<div class="tab-content">
<div class="tab-pane active" id="records">
<form class="navbar-search pull-right" >
	<input type="text" name="search" class="search-query" placeholder="Search" id="search" />
</form>

<form>
	<input type="hidden" name="id" />
	<input type="button" value="ADD PATIENTS" id="add_button" />
	
	<br /></br />
	<table id="record_table" cellspacing=0; border=1; class="table table-striped">
	<tr>
		<th class="forTheList">Id</th>
		<th class="forTheList">Firstname</th>
		<th class="forTheList">Lastname</th>
		<th class="forTheList">Middle-Initial</th>
		<th class="forTheList">Age</th>
		<th class="forTheList">Gender</th>
		<th class="forTheList">Address</th>
		<th class="forTheList">Department</th>
		<th class="forTheList">Date-Admitted</th>
		<th class="forTheList">Actions</th>
		
	</tr>
	</table>
</form>


</div><!--end tag for records-->

<div class="tab-pane" id="hosp_dep">
<form>


	<table id="department_table" border=1; cellspacing=0; class="table table-striped">
	<tr>
		<th class="forTheList">Room Number</th>
		<th class="forTheList">Department</th>
		<th class="forTheList">Doctors in Charge</th>
		<th class="forTheList">Service Fee</th>
	</tr>
	</table>

	<input type="hidden" name="id2" />
	<label for="room_number">Room Number</label>
	<input type="text" name="room_number" id="room_number" /><br />
	
	<label for="department2">Department</label>
		<select name="department2">
			<option>Select</option>
			<option value="Pediatrics">Pediatrics</option>
			<option value="Geriatrics">Geriatrics</option>
			<option value="Psychiatrics">Psychiatrics</option>
			<option value="Cancer Ward">Cancer Ward</option>
			<option value="Medical Unit">Medical Unit</option>
			<option value="Surgical Unit">Surgical Unit</option>
			<option value="Obstretric and Gynecology Unit">Obstretric and Gynecology Unit</option>
			<option value="Neonatal Intensive Care Unit">Neonatal Intensive Care Unit</option>
			<option value="Neurology Unit">Neurology Unit</option>
			<option value="Urulogy Unit">Urulogy Unit</option>
		</select><br />
		
		
	
	<label for="doctors_in_charge">Doctors in Charge</label>
	<input type="text" name="doctors_in_charge" id="doctors_in_charge" /><br />
	
	<label for="service_fee">Service Fee</label>
	<input type="text" name="service_fee" id="service_fee" /><br />
	
	<input type="button" class="btn" id="clear" value="CLEAR"/>
	<input type="button" class="btn btn-primary" id="add_dep" value="ADD"/>
	
	
	<div class="alert" id="addAlert">
		<strong>Oppss.... </strong>You should filled up all the fields! 	
	</div><!--addAlert-->
	
	<div class="alert" id="checkAlert">
		<strong>Oppss.... </strong>You must input numbers(0-9) in room number and service fee! 
	</div><!--checkAlert-->
	
	<div class="alert alert-success" id="alertSuccess">
		<strong>Success! </strong> Successfully added.
	</div><!--addAlert-->
	
</form>  
</div><!--dic-->
</div><!--tabs-->



<div id="forErrorDialog" title="...oppssss!" class="ui-dialog-titlebar-error">
<p><img src="images/warning.png" class="warning"/>Please filled up all the filleds!</p>
</div>

<div id="forSuccessAddDialog" title="Success!">
<p><img src="images/thumbs.icon" class="thumbs"/>Patient's Information successfully added !</p>
</div>


<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closing2">x</button>
		<h3 id="myModalLabel">Patient's Information</h3>
	</div>
	<div class="modal-body">
	<form>
		
		<label for="firstname">Firstname</label>
		<input type="text" name="firstname" id="firstname" />
		
		<br />
		
		<label for="lastname">Lastname</label>
		<input type="text" name="lastname" id="lastname" />
		
		<br />
		
		<label for="middle_initial">Middle-Initial</label>
		<input type="text" name="middle_initial" id="middle_initial" />
		
		<br />
		
		<label for="age">Age</label>
		<input type="text" name="age" id="age" />
		
		<br />
		 
		<label for="gender">Gender</label>
		<input type="radio" name="gender" class="gender" value="male" ><img src="images/male.png"></input>
		<input type="radio" name="gender" class="gender" value="female" ><img src="images/female.png"></input>
		
		<br />
		  
		<label for="address">Address</label>
		<input type="text" name="address" id="address" />
		
		<br />
		<label for="department">Department</label>
		<select name="department">
			<option>----Select----</option>
			<option value="Pediatrics">Pediatrics</option>
			<option value="Geriatrics">Geriatrics</option>
			<option value="Psychiatrics">Psychiatrics</option>
			<option value="Cancer Ward">Cancer Ward</option>
			<option value="Medical Unit">Medical Unit</option>
			<option value="Surgical Unit">Surgical Unit</option>
			<option value="Obstretric and Gynecology Unit">Obstretric and Gynecology Unit</option>
			<option value="Neonatal Intensive Care Unit">Neonatal Intensive Care Unit</option>
			<option value="Neurology Unit">Neurology Unit</option>
			<option value="Urulogy Unit">Urulogy Unit</option>
		</select>
		
		<br />
		<label for="date">Date Admitted</label>
		<input type="date" name="date" id="date" />
		
		
		
		</form>
	</div><!--modal body-->
	
	<div class="alert" id="checkAlert2">
		<strong>Warning!</strong> Age must be a number
	</div><!--alert-->
	
	<div class="alert" id="alert">
		<strong>Oppps! </strong> You should fill-up all the fields.	
	</div><!--alert-->
	
	<div class="alert alert-success" id="forSuccess">
		<strong>Well Done! </strong> Name successfully added.
	</div><!--alert alert-success-->
	
	
	<div class="modal-footer">
		<button class="btn" id="closing" data-dismiss="modal" aria-hidden="true">Close</button>
		<button class="btn btn-primary" id="saving">Save Changes</button>
		<button class="btn btn-primary" id="add">Add</button>
	</div><!--modal-footer-->

</div><!--myModal-->
</div><!--tababble tabs-left-->

<div id="forSuccessEditDialog" title="Success">
<p><img src="images/thumbs.icon" class="thumbs"/>Patient's Information Successfully Edited!</p>
</div>
<div id="forDeleteDialog" title="Delete?">
<p><img src="images/warning.png" class="warning"/>Are You Sure You Want To Delete Patient's Info?</p>
</div>
</body>
</html>
