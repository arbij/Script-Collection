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
data
=
1

let
possible_requests
={
	read(
		add_this
	){
		//update data
		++
		data	
		
		return(
			//some computation
			data
			+
			add_this
		)
	}
}

;(
	await
	import(
		'http'
	)
)
.createServer(
	async function(
		request,
		response
	){
		response
		.writeHead(
			200,
			
			{
				'Access-Control-Allow-Origin':
				'*'
			}
		)
		
		let
		request_body=
		''
		
		await
		new
		Promise(
			resolve=>{
				request
				.on(
					'data',
					
					chunk=>
					request_body
					+=
					chunk
				)
				.on(
					'end',
					
					resolve
				)
			}
		)
		
		request_body
		=
		JSON
		.parse(
			request_body
		)
		
		response
		.end(
			JSON.stringify(
				possible_requests[
					request_body
					.name
				](
					request_body
					.other_data
				)
			)
		)
	}
)
.listen(
	8000
)