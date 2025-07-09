//run in codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript

let
int32ToIp
=
int32=>{
	let
	octets=
	[]
	
	let
	octet_index=
	3
	
	let
	combinations_per_octet=
	256
	
	while(true){
		int32
	-=
	octets[
			octet_index
		]
		=
		int32
		%
		combinations_per_octet
		
		if(
			octet_index
			===
			0
		)
		break
		
		--
		octet_index
		
		int32
		/=
	combinations_per_octet
	}
	
	let
	ip=
	''
	
	while(true){
		ip
		+=
		octets[
			octet_index
		]
		
		++
		octet_index
		
		if(
			octet_index
			===
			octets.length
		)
		return(
			ip
		)
		
		ip
		+=
		'.'
	}
}