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

function
set_interval(
	seconds,
	callback
){
	let
	interval_id
	
	function
	callback_with_clear(){
		callback(
			()=>
			clearInterval(
				interval_id
			)
		)
	}
	
	interval_id
	=
	setInterval(
		callback_with_clear,
		
		seconds
		*
		1000
	)
	
	callback_with_clear()
	
	return(
		interval_id
	)
}

set_interval(
	.5,
	
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