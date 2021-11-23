<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<form action="phpcode.php" method="post">
	<div class="input_group">
		<label> Student ID <br></label> 
		<input type="text" name="student_id">
	</div>
	<div class="input_group">
		<label> Student Name <br></label> 
		<input type="text" name="student_name">
	</div>
	<div class="input_group">
		<label> Student Address <br></label> 
		<input type="text" name="student_add">
	</div>
	<div class="input_group">
		<button class="btn" type="submit" name="save">Save</button>
	</div>
</form>
<?php 
	include('db_connection.php');
	$results = mysqli_query($conn, "SELECT * FROM student_info"); 
?>
<table border='2px solid black'>
	<tr>
		<th>Student ID</th>
		<th>Student Name</th>
		<th>Student Address</th>
	</tr>
	<thead>
	<?php while ($row = mysqli_fetch_array($results)) { ?>
	<tr border = '2px solid black'>
		<td> <?php echo $row['student_id']; ?> </td>
		<td> <?php echo $row['student_name']; ?> </td>
		<td> <?php echo $row['student_address']; ?> </td>
		<td>
			<a href="first.php?edit=<?php echo $row['student_id']; ?>" class="edit_btn" >Edit</a>
		</td>
		<td>
			<a href="process.php?del=<?php echo $row['student_id']; ?>" class="del_btn" >Delete</a>
		</td>
	<?php } ?>
</body>
</html>