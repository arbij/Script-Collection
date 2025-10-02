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
		function(){
			return{
				cards:
				0n
			}
		}
		
		let
		bob
		=
		player()
		
		alice
		=
		player()
		
		let
		connect
		=
		function(
			player_1,
			player_2
		){
			player_1
			.next
			=
			player_2
		}
		
		connect(
			alice,
			bob
		)
		
		connect(
			bob,
			alice
		)
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
	take_one
	=
	function(){
		++
		player
		.cards
		
		--
		cards
		
		if(
			cards
			===
			0n
		)
		throw''
	}
	
	let
	take_one_and_switch_players
	=
	function(){
		take_one()
		
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
		take_one_and_switch_players()
		
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
				take_one()
			}
			
			switch_players()
			
			take_one_and_switch_players()
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