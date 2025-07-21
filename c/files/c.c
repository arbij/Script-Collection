#include <stdio.h>
#include <stdlib.h>
int main(){
	int
	n;
	
	FILE*
	file
	=
	fopen(
		"n.txt",
		"r"
	);
	
	fscanf(
		file,
		"%d",
		&n
	);
	
	fclose(
		file
	);

	++
	n;
	
	printf(
		"%d\n",
		n
	);
		
	file
	=
	fopen(
		"n.txt",
		"w"
	);
	
	fprintf(
		file,
		"%d",
		n
	);
	
	fclose(
		file
	);
}