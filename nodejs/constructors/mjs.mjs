let print=console.log

let create_object=(
	a,
	b,
	c
)=>{
	return{
		a,
		b,
		c
	}
}

print(
	create_object(
		1,2,3
	)
)

let create_object_2

{
	let keys=[
		'a',
		'b',
		'c'
	]
	
	create_object_2
	=
	function(
		...values
	){
		let object = {}
		
		for(
			let key
			in keys
		){
			object[
				keys[
					key
				]
			]
			=
			values[
				key
			]
		}
		
		return object
	}
}

print(
	create_object_2(
		1,2,3
	)
)

function create_object_creator(
	...keys
){
	return function(
		...values
	){
		let object = {}
		
		for(
			let key
			in keys
		){
			object[
				keys[
					key
				]
			]
			=
			values[
				key
			]
		}
		
		return object
	}
}

let create_object_3
=
create_object_creator(
	'a','b','c'
)

print(
	create_object_3(
		1,2,3
	)
)