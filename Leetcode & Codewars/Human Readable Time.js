//run in codewars.com/kata/52685f7382004e774f0001f7/train/javascript

let
humanReadable
=
seconds=>{
	let
	clock
	=
	[]
	
	clock[
		2
	]
	=
	seconds
	
	let
	index
	=
	2
	
	let
	add_zero
	=
	()=>{
		if(
			clock[
				index
			]
			<=
			9
		)
		clock[
			index
		]
		=
		'0'
		+
		clock[
			index
		]
	}
	
	while(true){
		let
		next_index
		=
		index
		-
		1
		
		clock[
			next_index
		]
		=
		Math.trunc(
			clock[
				index
			]
			/
			60
		)
		
		clock[
			index
		]
		=
		clock[
			index
		]
		%
		60
		
		add_zero()
		
		index
		=
		next_index
		
		if(
			index
			===
			0
		)
		break
	}
	
	add_zero()
	
	let
	_return
	=
	''
	
	while(true){
		_return
		+=
		clock[
			index
		]
		
		console.log(_return)
		
		if(
			index
			===
			2
		)
		return(
			_return
		)
		
		++
		index
		
		_return
		+=
		':'
	}
}