<html>
<head>
	<title>Login Page</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url('../bootstrap (2).css'); ?>">
</head>
<style type="text/css">
	.panel{
		border-radius: 0;
	}
	.panel .panel-heading{
		border-radius: 0;
	}
	.container{
		margin: 9.5% auto;
		width: 600px;
	}
	.form-control{
		border-radius: 0;

	}
</style>
<body>
<div class="col-md-12">
<div class="container">
	<div class="alert alert-success" id="success">...</div>
<div class="alert alert-info" id="auth">...</div>
<div class="alert alert-warning" id="warning"></div>
<div class="alert alert-danger" id="error">Username atau Password salah !</div>
	<div class="panel panel-default">
		<div class="panel-heading"><h3>Login Area</h3></div>
		<div class="panel-body">
			<form role="form" method="post" action="<?php echo site_url('index.php/login/ceklogin/'); ?>">
				<div class="form-group">
					<label for="username">Username</label>
					<input type="text" name="user" class="form-control" id="username" placeholder="Enter username">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-control" id="password" placeholder="Password">
				</div>
				<button type="submit" id="btn" class="btn btn-default">Submit</button>
			</form>
		</div>
	</div>
</div>
</div>

<script type="text/javascript" src="<?php echo base_url('../jquery.js'); ?>"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$("#success").hide();
		$("#auth").hide();
		$("#error").hide();
		$("#warning").hide();
		// $("#btn").click(function(e) {
		// 	e.preventDefault();
		// 	var username = $("#username").val();
		// 	var password = $("#password").val();
		// 	if (username=="") {
		// 		$("#warning").fadeIn('slow').delay(1000).text("Username masih kosong!");
		// 		$("#warning").fadeOut('slow');
		// 	}else if(password==""){
		// 		$("#warning").fadeIn('slow').delay(1000).text("Password masih kosong!");
		// 		$("#warning").fadeOut('slow');
		// 	}else{

		// 	};
		// });
		
	});

</script>
</body>
</html>