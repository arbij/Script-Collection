def constructor():
	object={
		'value':
		4
	}
	
	def function():
		object['value']+=1
		return object['value']
	
	object['function']=function
	
	return object

print(
	constructor()
	['function']()
)