import{
	setTimeout
	as
	sleep
}
from
'timers/promises'

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

await
sleep(
	500
)

print(
	5
)