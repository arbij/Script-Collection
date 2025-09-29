//run in codewars.com/kata/5819f1c3c6ab1b2b28000624/train/javascript

//linked list queue
let
padovan
=
function(
	n
){
	if(
		n
		<
		3
	)
	return(
		1n
	)
	
	let
	node
	=
	function(
		value,
		next
	){
		return{
			value,
			next
		}
	}
	
	let
	c
	=
	node(
		1n
	)
	
	let
	a
	=
	node(
		1n,
		
		node(
			1n,
			
			c
		)
	)
	
	while(true){
		c
		=
		c
		.next
		=
		node(
			a
			.value
			+
			a
			.next
			.value
		)
		
		if(
			n
			===
			3
		)
		return(
			c
			.value
		)
		
		--
		n
		
		a
		=
		a
		.next
	}
}

//array queue
padovan
=
function(
	n
){
	let
	default_numbers
	=
	3
	
	if(
		n
		<
		default_numbers
	)
	return(
		1n
	)
	
	let
	numbers
	=
	[
		...
		Array(
			3
		)
	]
	
	for(
		let
		number
		in
		numbers
	){
		numbers[
			number
		]
		=
		1
	}
	
	let
	start
	=
	0
	
	while(true){
		let
		new_end
		=
		start
		+
		3
		
		let
		potential_result
		=
		numbers[
			new_end
		]
		=
		numbers[
			start
		]
		+
		numbers[
			start
			+
			1
		]
		
		print(
			numbers
		)
		
		if(
			new_end
			===
			n
		)
		return(
			potential_result
		)
		
		++
		start
	}
}