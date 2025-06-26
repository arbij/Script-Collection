<!DOCTYPE html>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<?php
	$file
	=
	fopen(
		'file.txt',
		'r'
	);
	
	$n
	=
	json_decode(
		fread(
			$file,
			100
		)
	);
	
	fclose(
		$file
	);
	
	echo
	$n,'<br>';
	
	$file
	=
	fopen(
		'file.txt',
		'w'
	);
	
	fwrite(
		$file,
		
		json_encode(
			$n
			+
			1
		)
	);
	
	fclose(
		$file
	);
?>