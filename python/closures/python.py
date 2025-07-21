def temp():
	so_far=0
	
	global count
	
	def count():
		nonlocal so_far
		
		so_far+=1
		
		print(
			so_far
		)
temp()
del temp

count()
count()

# doesn't execute :)
# temp()
# print(counter)