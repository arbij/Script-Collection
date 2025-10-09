let
print
=
console
.log

let
merge
=
function(
	b,
	a
){
	let
	object
	=
	function(
		array
	){
		let
		object
		={
			index:
			0,
			
			done:
			false,
			
			check_if_done(){
				if(
					this
					.index
					===
					array
					.length
				){
					object
					.done
					=
					true
				}
				
				object
				.current
				=
				array[
					object
					.index
				]
			}
		}
		
		object
		.check_if_done()
		
		return(
			object
		)
	}
	
	a
	=
	object(
		a
	)
	
	b
	=
	object(
		b
	)
	
	let
	result
	=
	[]
	
	let
	index
	=
	0
	
	while(true){
		let
		smallest
		
		if(
			a
			.done
		){
			if(
				b
				.done
			)
			break
			
			smallest
			=
			b
		}
		else{
			if(
				b
				.done
				
				||
				
				a
				.current
				<
				b
				.current
			){
				smallest
				=
				a
			}
			else{
				smallest
				=
				b
			}
		}
		
		result[
			index
		]
		=
		smallest
		.current
		
		++
		index
		
		++
		smallest
		.index
		
		smallest
		.check_if_done()
	}
	
	return(
		result
	)
}

print(
	merge(
		[
			2,
			5
		],
		
		[
			1,
			3,
			7
		]
	)
)