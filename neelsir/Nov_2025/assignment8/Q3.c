// Online C compiler to run C program online
#include <stdio.h>

int fact (int num , int count, int stop){
    num = num * count;
    // printf("%d \n",count);
    if(count == stop){
        printf("Factorial is : %d \n",num);
        return 0;
    }
    
    count ++;
    
    
    
    return fact (num , count , stop);
}


int main() {
    int stop ;
    printf("input : ");
    scanf("%d", &stop);
    
    
    fact(1 , 1, stop);

    return 0;
}