import{
	createInterface
}
from
'readline/promises'

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
	readline_interface
	.question('')
	
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