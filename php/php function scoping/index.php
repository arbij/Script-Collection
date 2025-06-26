<?php
	echo
	'
		<!DOCTYPE html>
		<link rel="icon" href="data:;base64,iVBORw0KGgo=">
	';
	
	error_reporting
	(
		E_ALL
		&
		~
		E_WARNING
	);
	
	function
	my_echo
	(
		...
		$strings
	)
	{
		foreach
		(
			$strings
			as
			$string
		)
		echo
		json_encode
		($string)
		,
		'<br>';
	}
	
	$my_var_dump=
	function
	(
		...
		$vars
	)
	{
		echo
		'<pre>';
	
		var_dump
		(
			...
			$vars
		);
		
		echo
		'</pre>';
	};
	
	// my_var_dump
	// ($_REQUEST);
	
	(function(){
		$x=
		2;
		
		my_echo
		($x);
		
		// $f2=
		(function()
		use
		(&$x)
		{
			++
			$x;
			
			my_echo
			($x);
		})();
		
		my_echo
		($x);
	})();
?>