<!doctype html>
<script
	type=module
>
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
	
	repeat(
		10,
		
		()=>
		print()
	)
	
	print(
		'Old data',
		
		<?=
			fread(
				$file
				=
				fopen(
					'data.txt',
					'r'
				),
				100
			)
		?>
	)
	
	print(
		'New data',
		
		await(
			await fetch(
				'overwrite data.php',
				
				{
					method:
					'POST',
					
					body:
					JSON.stringify(
						prompt(
							'',
							2
						)
					)
				}
			)
		)
		.json()
	)
</script>