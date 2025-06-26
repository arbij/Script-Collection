#include <stdio.h>
#include <omp.h>
#include <stdbool.h>
int main(){
	#pragma omp parallel
	{
		int
		number_of_threads
		=
		omp_get_num_threads();
		
		int
		iteration
		=
		omp_get_thread_num();
		
		while(
			iteration
			<
			100
		){
			printf(
				"%d %d\n",
				omp_get_thread_num(),
				iteration
			);
			
			iteration
			+=
			number_of_threads;
		}
	}
}