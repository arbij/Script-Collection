import sth from 'http'

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

(
	await
	import(
		'http'
	)
)
.createServer(
	(
		request,
		response
	)=>{
		print(
			request
			.url
		)
		
		response
		.end(
			'hii'
		)
	}
)
.listen(
	8000,
	'localhost',
	
	()=>
	print(
		'server ready'
	)
)