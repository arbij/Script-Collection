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

function
repeat(
	iterations,
	do_this
){
	let
	iteration=
	0
	
	while(
		iteration
		<
		iterations
	){
		do_this(
			iteration
		)
		
		++
		iteration
	}
}

async function
send_http_request(
	name,
	other_data
){
	return(
		await(
			await fetch(
				'http://localhost:8000',
				
				{
					method:
					'POST',
					
					body:
					JSON.stringify(
						{
							name,
							other_data
						}
					)
				}
			)
		)
		.json()
	)
}

print(
	'Old data',
	
	await
	send_http_request(
		'read',
		6
	)
)

print(
	'New data',
	
	
)