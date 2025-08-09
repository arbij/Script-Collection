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
	function
	callback_with_clear(){
		callback(
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
		callback_with_clear,
		
		seconds
		*
		1000
	)
	
	callback_with_clear()
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