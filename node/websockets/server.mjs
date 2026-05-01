let
print
=
console
.log

let
users
=
{}

let
possible_messages
={
	register(
		name,
		email,
		password,
		_,
		set_current_user
	){
		if(
			users[
				name
			]
			!==
			undefined	
		){
			return(
				'username already exists!'
			)
		}
		
		set_current_user(
			users[
				name
			]
			={
				email,
				
				password,
				
				books:
				{}
			}
		)
		
		return(
			'user created!'
		)
	},
	
	log_in(
		name,
		password,
		_,
		set_current_user
	){
		let
		user
		=
		users[
			name
		]
		
		if(
				user
				===
				undefined
			||
					user
					.password
				!==
				password
		){
			return(
				null
			)
		}
		
		set_current_user(
			user
		)
		
		return(
			user
			.books
		)
	},
	
	admin_log_in(
		password,
		_,
		set_current_user
	){
		if(
			password
			!==
			'admin_password'
		){
			return(
				null
			)
		}
		
		set_current_user(
			'admin'
		)
		
		return(
			users
		)
	},
	
	new_book(
		title,
		author,
		genre,
		status,
		current_user
	){
		current_user
		.books[
			title
		]
		={
			author,
			genre,
			status
		}
		
		return(
			null
		)
	},
	
	remove_book(
		title,
		current_user
	){
		delete
		current_user
		.books[
			title
		]
		
		return(
			null
		)
	},
	
	modify_book(
		title,
		detail,
		new_detail_value,
		current_user
	){
		let
		user_books
		=
		current_user
		.books
		
		if(
			detail
			!==
			'title'
		){
			user_books[
				title
			][
				detail
			]
			=
			new_detail_value
		}
		else{
			user_books[
				new_detail_value
			]
			=
			user_books[
				title
			]
			
			delete
			user_books[
				title
			]
		}
		
		return(
			null
		)
	}
}

new(
	await
	import(
		'ws'
	)
)
.WebSocketServer(
	{
		port:
		8000
	}
)
.on(
	'connection',
	
	function(
		client
	){
		let
		current_user
		
		let
		set_current_user
		=
		function(
			new_user
		){
			current_user
			=
			new_user
		}
		
		client
		.on(
			'message',
			
			function(
				message
			){
				let[
					message_name,
					
					...
					message_arguments
				]
				=
				JSON
				.parse(
					message
				)
				
				let
				respond
				=
				function(
					current_user,
					set_current_user
				){
					client
					.send(
						JSON
						.stringify(
							possible_messages[
								message_name
							](
								...
								message_arguments,
								
								current_user,
								set_current_user
							)
						)
					)
				}				
				
				if(
					current_user
					===
					'admin'
				){
					respond(
						users[
							message_arguments
							.pop
							()
						]
					)
				}
				else{
					respond(
						current_user,
						set_current_user
					)
				}
				
				print(
					users
					.James
					.books
				)
			}
		)
	}
)