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
async function(
	seconds,
	do_this
){
	while(
		do_this()
	){
		await
		new
		Promise(
			function(
				resolve
			){
				setTimeout(
					function(){
						resolve()
					},
					
					seconds
					*
					1000
				)
			}
		)
	}
}

await
set_interval(
	.5,
	
	function(){
		print(
			2
		)
		
		return(
			Math.random()
			<
				2
				/
				3
		)
	}
)

print(
	'done'
)