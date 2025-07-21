<!DOCTYPE html>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<p
	id=
	p
>
	<?php
		var_dump(
			json_decode(
				fread(
					fopen(
						'data.txt',
						'r'
					),
					
					100
				)
			)
		);
	?>
</p>

<input
	id=
	input
>

<script
	type=module
>
	input
	.onchange
	=
	async function(){
		console.log(
			await(
				await
				fetch(
					'overwrite data.php',
					
					{
						method:
						'POST',
						
						body:
						// JSON.stringify(
							[
								this.value
							]
						// )
					}
				)
			)
			.json()
		)
	}
</script>