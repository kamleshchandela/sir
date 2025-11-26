// Online C compiler to run C program online
#include <stdio.h>

int fibo (int f1 , int f2, int f3, int num,int count){
    printf("%d \n",f3);
    f1 = f2;
    f2 = f3;
    f3 = f1+ f2;
    count ++;
    if(count == num ){
        return 0;
    }
    
    return fibo (f1 , f2 , f3, num , count);
    
}







int main() {
    int num ;
    printf("imput : ");
    scanf("%d",&num);
    int count = 0;
    fibo(0,1,1, num , 0);
    return 0;
}