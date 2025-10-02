// run in codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

let
print
=
console
.log

let
Sudoku
=
function(
	board
){
	return{
		isValid(){
			let
			length
			=
			board
			.length
			
			for(
				let
				row
				of
				board
			){
				let
				occupied
				=
				{}
				
				for(
					let
					column
					of
					row
				){
					if(
						typeof
						column
						!==
						'number'
						
						||
						
						column
						<
						1
						
						||
						
						column
						>
						length
						
						||
						
						occupied[
							column
						]
					)
					return false
					
					occupied[
						column
					]
					=
					true
				}
			}
			
			let
			repeat
			=
			function(
				start,
				end,
				step,
				do_this
			){
				while(
					start
					<
					end
				){
					do_this(
						start
					)
					
					start
					+=
					step
				}
			}
			
			try{
				repeat(
					0,
					length,
					1,
					
					function(
						column
					){
						let
						occupied
						=
						{}
						
						repeat(
							0,
							length,
							1,
							
							function(
								row
							){
								let
								value
								=
								board[
									row
								][
									column
								]
								
								if(
									occupied[
										value
									]
								)
								throw''
								
								occupied[
									value
								]
								=
								true
							}
						)
					}
				)
				
				let
				small_length
				=
				Math
				.floor(
					Math
					.sqrt(
						length
					)
				)
				
				repeat(
					0,
					length,
					small_length,
					
					function(
						row
					){
						print(
							'row',
							row
						)
						
						repeat(
							0,
							length,
							small_length,
							
							function(
								column
							){
								print(
									'column',
									column
								)
								
								let
								occupied
								=
								{}
								
								repeat(
									0,
									
									small_length,
									
									1,
									
									function(
										small_row
									){
										repeat(
											0,
											
											small_length,
											
											1,
											
											function(
												small_column
											){
												let
												value
												=
												board[
													row
													+
													small_row
												][
													column
													+
													small_column
												]
												
												print(
													value
												)
												
												if(
													occupied[
														value
													]
												)
												throw''
												
												occupied[
													value
												]
												=
												true
											}
										)
									}
								)
							}
						)
					}
				)
			}
			catch(
				error
			){
				if(
					error
					===
					''
				)
				return(
					false
				)
			}
			
			return(
				true
			)
		}
	}
}

print(
	Sudoku(
		[
			// [1,2,3,4],
			// [3,4,1,2],
			// [2,1,4,3],
			// [4,3,2,1]
			
			[1,2,3,4],
			[2,1,4,3],
			[3,4,1,2],
			[4,3,2,1]
		]
	)
	.isValid()
)