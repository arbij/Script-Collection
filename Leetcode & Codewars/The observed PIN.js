//run in codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

let
getPINs
=
observed=>{
	let
	cached_neighbours
	=[
		[
			0,
			8
		]
	]

	let
	get_neighbours
	=
	digit=>{
		if(
			cached_neighbours[
			digit
			]
			!==
			undefined
		)
		return(
			cached_neighbours[
			digit
			]
		)
		
		let
		neighbours
		=[
			digit
		]
		
		if(
			digit
			>=
			4
		){
			neighbours
			.push(
			digit
			-
			3
			)
		}
		
		if(
			digit
			<=
			6
		){
			neighbours
			.push(
			digit
			+
			3
			)
		}
		
		if(
			digit
			%
			3
			!==
			1
		)
		neighbours
		.push(
			digit
			-
			1
		)
		
		if(
			digit
			%
			3
			!==
			0
		)
		neighbours
		.push(
			digit
			+
			1
		)
		
		if(
			digit
			===
			8
		)
		neighbours
		.push(
			0
		)
		
		return(
			cached_neighbours[
				digit
			]
			=
			neighbours
		)
	}

	let
	possible_combinations
	=[
		''
	]

	for(
		let
		digit
		of
		observed
	){	
		let
		new_possible_combinations=
		[]
		
		for(
			let
			neighbour
			of
			get_neighbours(
				+
				digit
			)
		)
		for(
			let
			possible_combination
			of
			possible_combinations
		)
		new_possible_combinations
		.push(
			possible_combination
			+
			neighbour
		)
		
		possible_combinations
		=
		new_possible_combinations
	}
	
	return(
		possible_combinations
	)
}