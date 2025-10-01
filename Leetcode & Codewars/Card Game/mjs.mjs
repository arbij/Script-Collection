//run in codewars.com/kata/61fef3a2d8fa98021d38c4e5/train/javascript

let
print
=
console
.log

let
cardGame
=
function(
	cards
){
	let
	alice
	
	{
		let
		player
		=
		function(
			next
		){
			return{
				cards:
				0n,
				
				next
			}
		}
		
		let
		bob
		=
		player()
		
		alice
		=
		player(
			bob
		)
		
		bob
		.next
		=
		alice
	}
	
	let
	player
	=
	alice
	
	let
	switch_players
	=
	function(){
		player
		=
		player
		.next
	}
	
	let
	remove_one
	=
	function(){
		--
		cards
		
		++
		player
		.cards
		
		if(
			cards
			===
			0n
		)
		throw''
	}
	
	let
	remove_one_and_switch_players
	=
	function(){
		remove_one()
		
		switch_players()
	}
	
	try{
		if(
			cards
			%
			2n
			===
			1n
		)
		remove_one_and_switch_players()
		
		while(true){
			if(
					cards
					===
					4n
				||(
						cards
						%
						2n
						===
						0n
					&&
						cards
						%
						4n
						!==
						0n
				)
			){				
				player
				.cards
				+=
				cards
				/=
				2n
			}
			else{	
				remove_one()
			}
			
			switch_players()
			
			remove_one_and_switch_players()
		}
	}
	catch{}
	
	return(
		alice
		.cards
	)
}

print(
	cardGame(
		12n
	)
)