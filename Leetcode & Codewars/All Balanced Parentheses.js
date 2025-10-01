//run in codewars.com/kata/5426d7a2c2c7784365000783/train/javascript

let
balancedParens
=
function(
	n
){
	let
	solutions
	=
	[]
	
	let
	checked
	=
	{}
	
	let
	to_be_checked
	=
	[
		[
			'',
			n,
			n
		]
	]
	
	while(
		to_be_checked
		.length
		!==
		0
	){
		let
		check_this
		=
		to_be_checked
		.pop()
		
		let
		by_value
		=
		JSON
		.stringify(	
			check_this
		)
		
		if(
			checked[
				by_value
			]
			===
			true
		)
		continue
		
		checked[
			by_value
		]
		=
		true
		
		let[
			possibility,
			opening,
			closing
		]
		=
		check_this
		
		if(
			opening
			===
			0
		){
			while(
				closing
				>
				0
			){
				possibility
				+=
				')'
				
				--
				closing
			}
			
			solutions
			.push(
				possibility
			)
			
			continue
		}
		
		to_be_checked
		.push(
			[
				possibility
				+
				'(',
				
				opening
				-
				1,
				
				closing
			]
		)
		
		if(
			opening
			<
			closing
		){
			to_be_checked
			.push(
				[
					possibility
					+
					')',
					
					opening,
					
					closing
					-
					1
				]
			)
		}
	}
	
	return(
		solutions
	)
}