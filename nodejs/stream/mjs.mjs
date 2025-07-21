import fs from 'fs'

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

fs
.createReadStream(
	'txt.txt',
	{
		encoding: 'utf8',
		highWaterMark: 1 // 64KB chunks
	}
)
.on(
	'data',
	chunk=>{
		print(
			chunk
		)
	}
)
.on(
	'end',
	
	()=>
	print(
		'No more data to read.'
	)
)