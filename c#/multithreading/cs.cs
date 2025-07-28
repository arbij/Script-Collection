using System.Threading;
using System.Threading.Tasks;

void
print(
	dynamic
	some_string
){
	System.Console.WriteLine(
		some_string
	);
}

void
repeat(
	int
	iterations,
	
	System.Action<dynamic>
	function
){
	for(
		var
		iteration
		=
		1;
		
		iteration
		<=
		iterations;
		
		++
		iteration
	)
	function(
		iteration
	);
}


var
thread
=
new
Thread(
	()=>
	repeat(
		10,
		
		iteration=>
		print(
			"a"
		)
	)
);

thread.Start();

repeat(
	10,
	
	iteration=>
	print(
		"b"
	)
);

thread
.Join();

print(
	"Done!"
);