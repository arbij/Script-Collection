//run in codewars.com/kata/5819f1c3c6ab1b2b28000624/train/javascript

//linked list queue
let
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
	node
	=
	function(){
		return{
			value:
			1n
		}
	}
	
	let
	first
	=
	node()
	
	{
		let
		current
		=
		first
		
		while(
			length
			>
			1
		){
			current
			=
			current
			.next
			=
			node()
			
			--
			length
		}
		
		current
		.next
		=
		first
	}
	
	while(true){
		let
		next
		=
		first
		.next
		
		first
		.value
		+=
		next
		.value
		
		if(
			n
			===
			3
		)
		return(
			first
			.value
		)
		
		--
		n
		
		first
		=
		next
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