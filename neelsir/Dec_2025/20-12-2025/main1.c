#include <stdio.h>

int main() {
    FILE *pointer;
    char name[1000];
    
    pointer = fopen ("index.txt" , "r") ;






    // ye while loop har line ke liye chalega 
    while(fgets(name , sizeof(name) , pointer)){
        printf("%s" , name) ;
    }

    fclose(pointer) ;

    FILE *poi ;
    poi = fopen("kamo.txt" , "r") ;
    if(!poi){
        printf("\n Not able to open the file.") ;
    }

    fclose(poi) ;


    return 0;
}


