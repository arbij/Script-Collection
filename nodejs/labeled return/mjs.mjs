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
	
function f(){
	try{
		function f2(){
			if(true){
				throw 5
			}
		}
		f2()
	}
	catch{
		return 5
	}
}

print(
	f()
)