<?php
	error_reporting(
		E_ALL 
		& 
		~
		E_WARNING
	);
	
	function
	my_echo(
		$string
	){
		echo
		json_encode(
			$string
		)
		,
		'<br>';
	}

	my_echo(
		$_GET
	);
	
	$number
	=
	$_GET[
		'number'
	];
	
	$number2
	=
	$_GET[
		'number2'
	];
	
	if(
		$number
		===
		null
	){
		echo'
			<form>
				<input
					name = number
					value = 4
				>
			</form>
		';
	}
	else
	if(
		$number2
		===
		null
	){
		echo"
			<form>
				<input
					name = number2
					value = 7
				>
				<input
					name = number
					value = $number
					type = hidden
				>
			</form>
		";
	}
	else
	echo
	$number
	+
	$number2;
?>