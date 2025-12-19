#include <stdio.h>

int main(){

// read 'r' 
// write 'w'
// append 'a'
// delete remove()

// fopen("file name" , "opening mode")
// fprintf()
// fscanf()
// fgets()
// fclose()

FILE *ptr ;

ptr = fopen("index.html" , "r") ;
char code[100] ;

fgets(code , sizeof(code) , ptr) ;
fscanf(code , sizeof(code) , ptr) ;
printf("%s" , code);



// fprintf(ptr , "mye append kariyu") ;

fclose(ptr) ;

// remove("index.html") ;



return 0;


}