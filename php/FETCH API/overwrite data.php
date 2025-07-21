<?php
	$new_data=
	file_get_contents("php://input");
	
	fwrite(
		fopen(
			'data.txt',
			'w'
		),
		
		$new_data
	);
	
	echo
	$new_data;
?>