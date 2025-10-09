// run in leetcode.com/problems/rotate-list/

let
rotateRight
=
function(
	head,
	rotations
){
	if(
		head
		=
		null
	)
	return(
		null
	)
	
	let
	nodes
	=
	[]
	
	let
	length
	=
	0
	
	let
	current
	=
	head
	
	while(true){
		nodes[
			length
		]
		=
		current
		
		++
		length
		
		let
		next
		=
		current
		.next
		
		if(
			next
			===
			null
		)
		break
		
		current
		=
		next
	}
	
	current
	.next
	=
	head
	
	let
	index_of_last_node
	=
	length
	-
	1
	-(
		rotations
		%
		length
	)
	
	head
	=
	nodes[
		index_of_last_node
	]
	.next
	
	nodes[
		index_of_last_node
	]
	.next
	=
	null
	
	return(
		head
	)
}