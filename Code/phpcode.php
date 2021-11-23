<?php
include('db_connection.php');
$student_id="";
$student_name="";
$student_add="";
if(isset($_POST['save'])){
	//echo "mariam"; exit;
	$student_id = $_POST['student_id'];
	$student_name = $_POST['student_name'];
	$student_add = $_POST['student_add'];
	$query="INSERT INTO student_info(student_id, student_name, student_address) 
	VALUES('$student_id', '$student_name', '$student_add')";
	//exit;
	//mysqli_query($conn, query:"INSERT INTO student_info(student_id, student_name, student_address) 
	//VALUES('$student_id', '$student_name', '$student_add')");
	mysqli_query($conn, $query);
	header("location: first.php");
}
?>
