//run in leetcode.com/problems/house-robber/

let
print
=
function(
	...
	values
){
	let
	print
	=
	console
	.log
	
	for(
		let
		value
		of
		values
	)
	print(
		value
	)
	
	print()
}

let rob=function(houses){
	let to_check=[
		{
			current:0,
			stolen:0
		}
	]
	
	let checked=[]
	
	let max=0
	
	while(true){
		let{
			current,
			stolen
		}
		=to_check.pop()
		
		if(current<houses.length){		
			for(
				let potential of[
					{
						stolen:stolen+houses[current],
						current:current+2
					},
					{
						stolen:stolen+houses[current+1],
						current:current+3
					}
				]
			){
				if(potential.stolen>(checked[potential.current]??-1)){
					checked[potential.current]=potential.stolen
					to_check.push(potential)
				}
			}
		}
		else{
			if(
				stolen>max
			)
			max=stolen
		}
		
		if(to_check.length===0){
			return max
		}
	}
}

print(
	rob(
		[0,0,0,1]
	)
)