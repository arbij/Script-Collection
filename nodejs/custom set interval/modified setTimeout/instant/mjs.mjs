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
	interval_id
	=
	setTimeout(
		function(){
			set_interval(
				seconds,
				do_this
			)
		},
		
		seconds
		*
		1000
	)
	
	do_this(
		function(){
			clearTimeout(
				interval_id
			)
		}
	)
}

set_interval(
	1,
	
	function(
		stop
	){
		print(
			2
		)
		
		if(
			Math.random()
			<
			1/4
		)
		stop()
	}
)