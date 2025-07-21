//run in codewars.com/kata/5765870e190b1472ec0022a2/train/javascript

let
pathFinder
=
maze=>{
	let
	rows
	=
	maze
	.split(
		'\n'
	)
	
	let
	n
	=
	rows
	.length
	
	let
	to_check
	=[
		[
			0,
			0
		]
	]
	
	let
	how_many_checked=
	0
	
	let
	which_ones_checked=
	[]
	
	let
	repeat
	=(
		iterations,
		do_this
	)=>{
		let
		iteration=
		0
		
		while(
			iteration
			<
			iterations
		){
			do_this(
				iteration
			)
			
			++
			iteration
		}
	}
	
	repeat(
		n,
		
		choose_vertical=>{
			let
			row
			=
			which_ones_checked[
				choose_vertical
			]
			=
			[]
			
			repeat(
				n,
				
				right=>{
					row[
						right
					]
					=
					false
				}
			)
		}
	)
	
	while(true){
		let
		how_much_down,
		how_much_right
		
		which_ones_checked
		.push(
			[
				how_much_down,
				how_much_right
			]
			=
			to_check[
				how_many_checked
			]
		)
		
		++
		how_many_checked
		
		if(
			how_much_down
			>=
			0
			
			&&
			
			how_much_down
			<
			n
			
			&&
			
			how_much_right
			>=
			0
			
			&&
			
			how_much_right
			<
			n
			
			&&
			
			rows[
				how_much_down
			][
				how_much_right
			]
			!==
			'W'
			
			&&
			
			!
			which_ones_checked[
				how_much_down
			][
				how_much_right
			]
		){
			if(
				how_much_down
				===
				n
				-
				1
				
				&&
				
				how_much_right
				===
				n
				-
				1
			)
			return(
				true
			)
			
			which_ones_checked[
				how_much_down
			][
				how_much_right
			]
			=
			true
			
			to_check
			.push(
				[
					how_much_down,
					
					how_much_right
					-
					1
				],
				
				
				[
					how_much_down,
					
					how_much_right
					+
					1
				],
				
				
				[
					how_much_down
					-
					1,
					
					how_much_right
				],
				
				
				[
					how_much_down
					+
					1,
					
					how_much_right
				]
			)
		}
		
		if(
			to_check
			.length
			===
			how_many_checked
		)
		return(
			false
		)
	}
}