// run in leetcode.com/problems/remove-duplicates-from-sorted-list/

let
print
=
console
.log

let
isValidBST
=
function(
	root
){
	let
	to_visit
	=[
		[
			root,
			
			-
			Infinity,
			
			Infinity
		]
	]
	
	while(true){
		let[
			node,
			
			minimum,
			
			maximum
		]
		=
		to_visit
		.pop()
		
		if(
			node
			!==
			null
		){
			let{
				val,
				left,
				right
			}
			=
			node
			
			// print(
			// 	val,
			// 	minimum,
			// 	maximum
			// )
			
			if(
				!(
					minimum
					<
					val
					
					&&
					
					val
					<
					maximum
				)
			)
			return(
				false
			)
			
			to_visit
			.push(
				[
					right,
					
					val,
					
					maximum
				],
				
				[
					left,
					
					minimum,
					
					val
				]
			)
		}
		
		if(
			to_visit
			.length
			===
			0
		)
		return(
			true
		)
	}
}

let
node
=
function(
	val,
	
	left
	=
	null,
	
	right
	=
	null
){
	return{
		val,
		left,
		right
	}
}

// print(
// 	isValidBST(
// 		node(
// 			5,
			
// 			node(
// 				1
// 			),
			
// 			node(
// 				4,
				
// 				node(
// 					3
// 				),
				
// 				node(
// 					6
// 				)
// 			)
// 		)
// 	)
// )

// print(
// 	isValidBST(
// 		node(
// 			2,
			
// 			node(
// 				1
// 			),
			
// 			node(
// 				3
// 			)
// 		)
// 	)
// )