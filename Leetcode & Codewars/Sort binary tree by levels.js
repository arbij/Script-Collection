//run in codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript

let
treeByLevels
=
root=>{
	let
	output=
	[]
	
	let
	nodes_to_visit
	=[
		root
	]
	
	let
	nodes_visited=
	0
	
	while(true){
		if(
			nodes_visited
			===
			nodes_to_visit
			.length
		)
		return(
			output
		)
		
		let
		current_node
		=
		nodes_to_visit[
			nodes_visited
		]
		
		if(
			current_node
			!==
			null
		){
			output
			.push(
				current_node
				.value
			)
			
			nodes_to_visit
			.push(
				current_node
				.left,
				
				current_node
				.right
			)
		}
		
		++
		nodes_visited
	}
}