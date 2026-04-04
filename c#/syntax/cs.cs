#pragma warning disable IL2026, IL3050, CS8981

Action<dynamic> print = Console.WriteLine;

dynamic list=new List<dynamic>{1,2,4};

var dictionary = new Dictionary<string, dynamic>{
	{"a", 1},
	{"b", 2}
};

print(
	dictionary["b"]
);

print(list[2]);

var tuple=(a:1, b:2);

tuple.a=8;

print(tuple.a);

foreach(
	var value
	in new[]{1,2,3}
){
	print(
		value
	);
}

void f(
	params dynamic[] parameters
){
	foreach(var value in parameters)
	print(value);
}

var nums = new dynamic[]{100,200};

f([1,2,3]);
f(nums);

var f2 = (params dynamic[] parameters)=>{
	foreach(var value in parameters){
		print(value);
	}
};

f2(1,2,5);

//Action<parameters>, Func<return, parameters>