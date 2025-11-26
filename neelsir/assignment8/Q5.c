// Online C compiler to run C program online
#include <stdio.h>

int sumfun (int num , int sum){ 
    int temp = num % 10;
    // printf("%d \n",temp);
    sum = sum + temp;
    num = num/10;
    if(num == 0){
        printf("sum is : %d",sum);
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






