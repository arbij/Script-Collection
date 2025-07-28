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
promise
=
new
Promise(
	resolve=>{
		setTimeout(
			()=>
			resolve(
				Math.random()
			),
			
			500	
		)
	}
)

print(
	promise
)

print(
	await
	promise
)

print(
	promise
)