import{
	createInterface
}
from
'readline'

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

let
scan
=
async()=>{
	let
	readline_interface
	=
	createInterface({
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
	new
	Promise(
		resolve=>
		readline_interface
		.question(
			'',
			
			input=>
			resolve(
				input
			)
		)
	)
	
	readline_interface
	.close()
	
	return(
		result
	)
}

print(
	await
	scan()
)