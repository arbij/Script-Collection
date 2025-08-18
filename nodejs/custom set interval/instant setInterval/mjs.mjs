function
print(
	...
	strings
){
	for(
		let
		string
		of
		strings
	)
	console.log(
		string
	)
	
	console.log(
		''
	)
}

let
set_interval
=
function(
	seconds,
	do_this
){	
	let
	do_this_with_clear
	=
	function(){
		do_this(
			function(){
				clearInterval(
					interval_id
				)
			}
		)
	}
	
	let
	interval_id
	=
	setInterval(
		do_this_with_clear,
		
		seconds
		*
		1000
	)
	
	do_this_with_clear()
}

set_interval(
	1,
	
	clear=>{
		print(
			4
		)
		
		if(
			Math.random()
			<
			1/3
		)
		clear()
	}
)