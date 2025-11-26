// Online C compiler to run C program online
#include <stdio.h>

int print (int num , int count){
    printf("%d \n", count);
    count --;
    
    if(count == 0){
        return 0;
    }
    
    
    
    return print( num , count );
}



int main() {
    int count ;
    printf ("input :");
    scanf("%d", &count);
    print(1 , count);
    return 0;
}