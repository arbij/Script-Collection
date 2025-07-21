//run in leetcode.com/problems/longest-common-prefix/

let
longestCommonPrefix
=
words=>{
	if(
		words
		.length
		===
		0
	)
	return(
		''
	)
	
	let
	prefix=
	words[
		0
	]
	
	let
	word_index=
	1
	
	while(true){
		if(
			word_index
			===
			words
			.length
		)
		return(
			prefix
		)
		
		let
		word
		=
		words[
			word_index
		]
		
		let
		character_index=
		0
		
		while(true){
			if(
				character_index
				===
				prefix
				.length
			)
			break
			
			if(
				prefix[
					character_index
				]
				!==
				word[
					character_index
				]
			){
				let
				new_prefix=
				''
				
				let
				new_character_index=
				0
				
				while(true){
					if(
						new_character_index
						===
						character_index
					)
					break
					
					new_prefix
					+=
					prefix[
						new_character_index
					]
					
					++
					new_character_index
				}
				
				prefix=
				new_prefix
				
				break
			}
			
			++
			character_index
		}
		
		++
		word_index
	}
}