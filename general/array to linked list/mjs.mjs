let
print
=
function(
	...
	values
){
	let
	print
	=
	console
	.log
	
	for(
		let
		value
		of
		values
	)
	print(
		value
	)
	
	print()
}

let
head
=
null

let
current
=
function(){
	head
	=
	arguments[
		0
	]
}

for(
	let
	value
	of[
		1,
		2,
		3
	]
){
	let
	new_node
	={
		value
	}
	
	current(
		new_node
	)
	
	current
	=
	function(){
		new_node
		.next
		=
		arguments[
			0
		]
	}
}

current(
	null
)

print(
	head
)