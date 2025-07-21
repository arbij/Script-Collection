//run in codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

let
findEvenIndex
=
array=>{
	let
	left_sum=
	0
	
	let
	right_sum=
	left_sum
	
	for(
		let
		element
		of
		array
	)
	right_sum
	+=
	element
	
	for(
		let
		index
		in
		array
	){
		right_sum
		-=
		array[
			index
		]
		
		// print(
		// 	left_sum,
		// 	right_sum
		// )
		
		if(
			left_sum
			===
			right_sum
		)
		return(
	+
			index
		)
		
		left_sum
		+=
		array[
			index
		]
	}
	
	return(
		-1
	)
}