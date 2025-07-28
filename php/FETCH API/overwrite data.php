<?php
	$new_data
	=
	json_encode(
		json_decode(
			file_get_contents(
				"php://input"
			)
		)
		+
		1
	);
	
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