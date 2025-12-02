// Online C compiler to run C program online
#include <stdio.h>

int main() {
    
    int num;
    printf("input : ");
    scanf ("%d", &num);
    if(num > 0){
        printf("%d is positive",num);
        
    }
    else if ( num < 0){
        printf("%d is negative",num);
    }
    else{
        printf("%d is Zero",num);
    }

    return 0;
}