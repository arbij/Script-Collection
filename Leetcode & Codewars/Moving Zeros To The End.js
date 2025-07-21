//run in codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

let
moveZeros
=
array=>{
	let
	zeros_found=
	0
	
	let
	index=
	0
	
	while(true){
		if(
			index
			===
			array
			.length
	||
			index
			===
			array.length
			-
			zeros_found
		)
		break
		
		array[
			index
		]
		=
		array[
			index
			+
			zeros_found
		]
		
		if(
			array[
				index
			]
			===
			0
		)
		++
		zeros_found
		else
		++
		index
	}
	
	while(
		index
		<
		array.length
	){
		array[
			index
		]
		=
		0
		
		++
		index
	}
	
	return(
		array
	)
}