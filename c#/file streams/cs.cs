using System.IO;

void
print(
	dynamic
	some_string
){
	System.Console.WriteLine(
		some_string
	);
}

{
	using
	var
	stream_writer
	=
	new
	StreamWriter(
		"txt.txt"
	);
	
	stream_writer
	.Write(
		"aaa"+
		"\n"+
		"bbb"
	);
}

{
	using
	var
	stream_reader
	=
	new
	StreamReader(
		"txt.txt"
	);

	while(true){
		var
		line
		=
		stream_reader
		.Read();
		
		if(
			line
			==
			-1
		)
		break;
		
		print(
			(char)
			line
		);
	}
}