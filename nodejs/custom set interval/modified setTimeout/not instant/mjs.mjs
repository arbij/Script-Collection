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
	return(
		setTimeout(
			function(){
				let
				interval_id
				=
				set_interval(
					seconds,
					do_this
				)
				
				do_this(
					function(){
						clearTimeout(
							interval_id
						)
					}
				)
			},
			
			seconds
			*
			1000
		)
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