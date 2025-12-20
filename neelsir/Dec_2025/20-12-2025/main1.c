#include <stdio.h>

int main() {
    FILE *pointer;
    char name[1000];
    
    pointer = fopen ("index.txt" , "r") ;

    while(fgets(name , sizeof(name) , pointer) != NULL){
        printf("%s" , name) ;
    }

    return 0;
}


