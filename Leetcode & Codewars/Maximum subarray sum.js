//run in codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

let
maxSequence
=
array=>{
	let
	max=
	0
	
	let
	local_max=
	0
	
	for(
		let
		element
		of
		array
	){
		local_max
		+=
		element
		
		if(
			local_max
			<
			0
		)
		local_max=
		0
		else
		if(
			local_max
			>
			max
		)
		max=
		local_max
	}
	
	return(
		max
	)
}