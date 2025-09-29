//run in codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

let
sumStrings
=
function(
	a,
	b
){
	let
	big,
	small
	
	if(
		a
		.length
		>
		b
		.length
	){
		big
		=
		a
		
		small
		=
		b
	}
	else{
		big
		=
		b
		
		small
		=
		a
	}
	
	let
	length_difference
	=
	big
	.length
	-
	small
	.length
	
	let
	zeros
	=
	''
	
	for(
		let
		iteration
		=
		0;
		
		iteration
		<
		length_difference;
		
		++
		iteration
	){
		zeros
		+=
		'0'
	}
	
	small
	=
	zeros
	+
	small
	
	let
	index
	=
	big
	.length
	-
	1
	
	let
	carry
	=
	0
	
	let
	result
	=
	[]
	
	while(true){
		if(
			index
			<
			0
		)
		break
		
		let
		digit
		=
		carry
		+
		+
		small[
			index
		]
		+
		+
		big[
			index
		]
		
		if(
			digit
			<=
			9
		){
			carry
			=
			0
		}
		else{
			digit
			-=
			10
			
			carry
			=
			1
		}
		
		result[
			index
		]
		=
		digit
		
		--
		index
	}
	
	let
	string
	=
	''
	
	if(
		carry
		===
		1
	){
		string
		+=
		1
	}
	
	for(
		let
		digit
		of
		result
	){
		if(
			digit
			===
			0
			&&
			carry
			===
			0
		)
		continue
		
		carry
		=
		undefined
		
		string
		+=
		digit
	}
	
	return(
		string
	)
}