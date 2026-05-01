function print(
	...strings
){
	let print = console.log
	
	for(
		let string of strings
	){
		print(
			string
		)
	}
	print('')
}

function equal(
	a,
	b
){
	if(
		a===b
	)
	return true
	
	if(
		[a,b]
		.some(
			value=>
			typeof value !== 'object'
			||
			value === null
		)
	)
	return false
	
	let keys_in_a= 0
	
	for(let key in a){
		if(
			!equal(
				a[key],
				b[key]
			)
		)
		return false
		
		++keys_in_a
	}
	
	let keys_in_b= 0
	
	for(let key in b){
		++keys_in_b
	}
	
	return keys_in_a===keys_in_b
}

print(
	equal([0, {b:2, a:1}],[0, {a:1, b:2, c:3}]),
	equal([0, {b:2, a:1}],[0, {a:1, b:2}])
)

function equal_2(
	a,
	b
){
	let checks_left = [
		[
			a,
			b
		]
	]
	
	while(true){
		[
			a,
			b
		]
		=
		checks_left.pop()
		
		if(
			a !== b
		){
			if(
				[a,b]
				.some(
					value=>
					typeof value !== 'object'
					||
					value === null
				)
			)
			return false
			
			let keys_in_a= 0
			
			for(let key in a){
				checks_left
				.push(
					[
						a[key],
						b[key]
					]
				)
				
				++keys_in_a
			}
			
			let keys_in_b= 0
			
			for(let key in b){
				++keys_in_b
			}
			
			if(
				keys_in_a !== keys_in_b
			)
			return false
		}
		
		if(
			checks_left.length === 0
		)
		return true
	}
}

print(
	equal([0, {b:2, a:1}],[0, {a:1, b:2, c:3}]),
	equal_2([0, {b:2, a:1}],[0, {a:1, b:2}])
)