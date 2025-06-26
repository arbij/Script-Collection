def f0():
	a=1
	
	def f():
		nonlocal a
		a=2

		def f2():
			nonlocal a
			a=3

		f2()
		
	f()
	print(a)

f0()