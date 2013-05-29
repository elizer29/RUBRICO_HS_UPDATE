$(document).ready(function(){

	//for the home page
	
	$("body").off('.data-api');
	
	
	$("#div_o1").show();
	$("#div_o2").hide();
	$("#div_o3").hide();
	
	$("#home").click(function(){
		$("#div_o1").show();
		$("#div_o2").hide();
		$("#div_o3").hide();
	});
	
	$("#mssn_vssn").click(function(){
		$("#div_o1").hide();
		$("#div_o2").show();
		$("#div_o3").hide();
	});
	
	$("#events").click(function(){
		$("#div_o1").hide();
		$("#div_o2").hide();
		$("#div_o3").show();
	});
	
//xxxxx for the monitoring page xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	var dateOpt = { dateFormat: 'MM-dd-yy'};
	
	
	$("#tabs").tabs();
	$("#date").datepicker(dateOpt);
	$("#form").hide();
	$("#forErrorDialog").hide();
	$("#forSuccessAddDialog").hide();
	$("#forSuccessEditDialog").hide();
	$("#forDeleteDialog").hide();
	$("#alertSuccess").hide();
	$("#logOut").tooltip();
	$("#checkAlert2").hide();
	
//xxxxx for viewing the content xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx	
	$.ajax({
		type: "POST",
		url: "patients_view.php",
		success: function(data){
			$("#record_table").append(data);
		},
		error: function(data){}
	});
	
	$.ajax({
		type: "POST",
		url: "department_view.php",
		success: function(data){
			$("#department_table").append(data);
		},
		error: function(data){}
	});
	
//xxxxx for search xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	$("#search").keyup(function(){
		var sname = $("input[name='search']").val();
		var obj = {"lastname":sname};
		
		$.ajax({
			type: "POST",
			url: "patients_search.php",
			data: obj,
			success: function(data){
				$("#record_table").html(data);
			}, 
			error: function(data){
			}
		});
	});
	
//xxxxx for adding xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	
	$("#add_button").click(function(){
	
		
		$("#myModal").modal();
		$("#saving").hide();
		$("#add").show();
		
		$("#add").click(function(){
			var objects = {
						"firstname":$("input[name='firstname']").val(),
						"lastname":$("input[name='lastname']").val(),
						"middle_initial":$("input[name='middle_initial']").val(),
						"age":$("input[name='age']").val(),
						"gender":$("input:radio[name='gender']:checked").val(),
						"address":$("input[name='address']").val(),
						"department":$("select[name='department']").val(),
						"date":$("input[name='date']").val()
					};
					
					var firstname= $("input[name='firstname']").val();
					var lastname= $("input[name='lastname']").val();
					var middle_initial= $("input[name='middle_initial']").val();
					var age= $("input[name='age']").val();
					//var e = $("input:radio[name='gender']:checked").val();
					var address= $("input[name='address']").val();
					var date= $("input[name='date']").val();
					var department= $("select[name='department']").val();
					
					
					var check = /^[0-9]+/;
					
					
					if(firstname=="" || lastname=="" || middle_initial=="" || age=="" || address=="" || date=="" || department=="----Select----"){
						$("#alert").show();
						$("#checkAlert2").hide();
						return false;
					}	
					 else if(($("input:radio[name='gender']:checked").val() == null || false)){
						$("#alert").show();
						$("#checkAlert2").hide();
						return false;
					}
					 else if(!check.test(age)){
					 	$("#checkAlert2").show();
					 	$("#alert").hide();
					 	return false;
					 }
					 else {
					 
						$.ajax({
						type: "POST",
						url: "patients_add.php",
						data: objects,
						success: function(data){
							$("#record_table").append(data);
							$("#forSuccess").show();
							$("#forSuccess").fadeOut(5000);
							$("#alert").hide();
							$("#checkAlert2").hide();
						},
						error: function(data){}
						});
						return true;
						
					}
		});				
	});
	
	
	$("#btn_Login").click(function(){
		$("#user").modal();
	});
	
//xxxxxxx add department xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	
	$("#addAlert").hide();
	$("#checkAlert").hide();
	$("#add_dep").click(function(){
	
		
		
		var room_number = $("input[name='room_number']").val();
		var doctors_in_charge = $("input[name='doctors_in_charge']").val();
		var service_fee = $("input[name='service_fee']").val();
		var department = $("select[name='department2']").val();
		
		var check = /^[0-9]+/;
		
		if(room_number=="" || doctors_in_charge=="" || service_fee=="" || department=="Select"){
			$("#addAlert").show();
			$("#checkAlert").hide();
			return false;
		}
		else if(!check.test(room_number) || !check.test(service_fee)){
			$("#checkAlert").show();
			$("#addAlert").hide();
			return false;
		}
		
		 else{
			var obj = {
				"room_number":$("input[name='room_number']").val(),
				"department2":$("select[name='department2']").val(),
				"doctors_in_charge":$("input[name='doctors_in_charge']").val(),
				"service_fee":$("input[name='service_fee']").val()
			};
		
				$.ajax({
					type: "POST",
					url: "department_add.php",
					data: obj,
					success:function(data){
						$("#checkAlert").hide();
						$("#addAlert").hide();
						$("#alertSuccess").show();
						$("#alertSuccess").fadeOut(5000);
						$("#department_table").append(data);
					},
					error: function(data){}
				});
				
		return true;
		}
	});
	
	$("#clear").click(function(){
		$("select").val('1');
		$("#room_number").val('');
		$("#doctors_in_charge").val('');
		$("#service_fee").val('');
	});
	
//--------------------------------------------------------------------------------------------------------------//

	$('#alert').hide();
	$('#forSuccess').hide();
	$("#user").hide();

	$('#closing, #closing2').click(function(){
		$("#alert").hide();
		$("#forSuccess").hide();
		$("input[name='firstname']").val('');
		$("input[name='lastname']").val('');
		$("input[name='middle_initial']").val('');
		$("input[name='age']").val('');
		$("input[name='gender']").attr("checked", false);
		$("input[name='address']").val('');
		$("select").val('1');
		$("input[name='date']").val('');
	});

	
/*--------------------------------------------------------------------------------------------------------------*/
	
});

//xxxxx for the delete xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

	function patients_delete(id){
		
		
		$("#forDeleteDialog").dialog({
			show: "fade",
			hide: "fade",
			modal: true,
			buttons:{
				"ok": function(){
					var obj = {"id":id};
					
					$.ajax({
						type: "POST",
						url: "patients_delete.php",
						data: obj,
						success: function(data){
							$(document.getElementById(id)).remove();
						},
						error: function(data){}
					});
					
					$(this).dialog("close");
				},
				"cancel": function(){
					$(this).dialog("close");
				}
			}
		});
		
		
	}
	
//xxxxx for the edit xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	
	function patients_edit(id){
		
	$("#add").hide();
	$("#saving").show();
	$("#myModal").modal();
	$("#saving").click(function(){
			
			var objects = {
						"id":$("input[name='id']").val(),
						"firstname":$("input[name='firstname']").val(),
						"lastname":$("input[name='lastname']").val(),
						"middle_initial":$("input[name='middle_initial']").val(),
						"age":$("input[name='age']").val(),
						"gender":$("input[name='gender']:checked").val(),
						"address":$("input[name='address']").val(),
						"department":$("select[name='department']").val(),
						"date":$("input[name='date']").val()
					};
					
					if(($("input:radio[name='gender']:checked").val() != null || false) && ($("select[name='department']").val() != "----Select----")){
						$.ajax({
							type: "POST",
							url: "patients_save.php",
							data: objects,
							success: function(data){
								$(document.getElementById(objects.id)).html(data);
								$("#alert").hide();
								$("#forSuccess").fadeIn();
							},
							error: function(data){}
						});
					}
					
					else {
						$("#alert").fadeIn();
					}
	});
	
	
	var objcts = {"id":id};
		
		$.ajax({
			type: "POST",
			url: "patients_edit.php",
			data: objcts,
			success: function(data){
				var obj = JSON.parse(data);
					$("input[name='id']").val(obj.id);
					$("input[name='firstname']").val(obj.firstname);
					$("input[name='lastname']").val(obj.lastname);
					$("input[name='middle_initial']").val(obj.middle_initial);
					$("input[name='age']").val(obj.age);
					$("input[name='gender']:checked").val(obj.gender);
					$("input[name='address']").val(obj.address);
					$("select[name='department']").val(obj.department);
					$("input[name='date']").val(obj.date);
			},
			error: function(data){}
		});
		
	}
	
	
	
	
	
	
	
	
	
