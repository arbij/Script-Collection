import{
	exec
}
from
'child_process'
import { stdout } from 'process'

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

exec(
	'py python.py',
	
	(
		error,
		output
	)=>
	print(
		'error',
		error,
		'',
		'output',
		output
	)
)