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
		let
		b
		=
		a
		.next
		
		c
		=
		c
		.next
		=
		node(
			a
			.value
			+
			b
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
		b
	}
}

//array queue
padovan
=
function(
	n
){
	let
	length
	=
	3
	
	if(
		n
		<
		length
	)
	return(
		1n
	)
	
	let
	numbers
	=
	Array(
		length
	)
	.fill(
		1n
	)
	
	let
	first
	=
	0
	
	while(true){
		let
		new_first
		=(
			first
			+
			1
		)
		%
		length
		
		let
		new_number
		=
		numbers[
			first
		]
		+=
		numbers[
			new_first
		]
		
		if(
			n
			===
			length
		)
		return(
			new_number
		)
		
		--
		n
		
		first
		=
		new_first
	}
}