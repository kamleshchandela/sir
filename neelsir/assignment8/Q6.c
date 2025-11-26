// Online C compiler to run C program online
#include <stdio.h>

int sumfun (int num , int sum){ 
    int temp = num % 10;

    sum = sum * 10 + temp;
    // printf("%d \n",sum);    
    num = num/10;
    if(num == 0){
        printf("Reverse is : %d",sum);
        return 0;
    }
    
    return sumfun (num , sum);
}







int main() {
    int num ;
    printf("input : ");
    scanf("%d",&num);
    
    sumfun(num , 0);

    return 0;
}