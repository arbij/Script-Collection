//run in leetcode.com/problems/find-the-length-of-the-longest-common-prefix/

let
longestCommonPrefix
=(
	array_1,
	array_2
)=>{
	let
	possible_prefixes
	=[
		true
	]
	
	for(
		let
		number_1
		of
		array_1
	){
		while(true){
			if(
				number_1
				===
				0
			)
			break
			
			possible_prefixes[
				number_1
			]
			=
			true
			
			number_1
			=
			Math.floor(
				number_1
				/
				10
			)
		}
	}
	
	let
	longest_prefix_length=
	0
	
	for(
		let
		number_2
		of
		array_2
	){
		while(true){
			if(
				number_2
				===
				0
			)
			break
			
			if(
				possible_prefixes[
					number_2
				]	
			){
				let
				prefix_length
				=(
					number_2
					+
					''
				)
				.length
				
				if(
					longest_prefix_length
					<
					prefix_length
				)
				longest_prefix_length=
				prefix_length
				
				break
			}
			
			number_2
			=
			Math.floor(
				number_2
				/
				10
			)
		}
	}
	
	return(
		longest_prefix_length
	)
}