let
print
=(
	...
	strings
)=>{
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

async function
scan(
	message=
	''
){
	if(
		message
		!==
		''
	)
	message
	+=
	'\n'
	
	let
	readline_interface
	=(
		await
		import(
			'readline/promises'
		)
	)
	.createInterface(
		{
			input
			:
			process
			.stdin,
			
			output
			:
			process
			.stdout
		}
	)
	
	let
	result
	=
	await
	readline_interface
	.question(
		message
	)
	
	readline_interface
	.close()
	
	return(
		result
	)
}

print(
	await
	scan(
		'hi'
	)
)