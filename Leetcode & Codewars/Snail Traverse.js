//run in codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

let
snail
=
_2d_array=>{
	let
	n
	=
	_2d_array[
		0
  	]
	.length
	
	// if(
	// 	n
	// 	===
	// 	0
	// )
	// return(
	// 	[]
	// )
	
	let
	_return=
	[]
	
	let
	lines_covered=
	0
	
	let
	down_index
	
	let
	right_index
	
	let
	traverse
	=
	()=>{
		_return
		.push(
			_2d_array[
				down_index
			][
				right_index
			]
		)
		
		// console.log(
		// 	down_index,
		// 	right_index
		// )
	}
	
	while(
		lines_covered
		<
		n
		/
		2
	){
		down_index
		=
		right_index
		=
		lines_covered
		
		while(true){
			if(		
				right_index
				>=
				n
				-
				lines_covered
			)
			break
			
			traverse()
			
			++
			right_index
		}
		
		--
		right_index
		
		while(true){
			++
			down_index
			
			if(
				down_index
				>=
				n
				-
				lines_covered
			)
			break
			
			traverse()
		}
		
		--
		down_index
		
		while(true){
			--
			right_index
			
			if(
				right_index
				<
				lines_covered
			)
			break
			
			traverse()
		}
		
		++
		right_index
		
		while(true){
			--
			down_index
			
			if(
				down_index
				<=
				lines_covered
			)
			break
			
			traverse()
		}
		
		++
		lines_covered
	}
	
	return(
		_return
	)
}