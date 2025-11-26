// Online C compiler to run C program online
#include <stdio.h>

int fun (int num, int count){
   
    num = num / 10;
    count ++;
        
        
    if(num <1){
        printf("totle degit is : %d\n",count);
        return 0;
    }
    fun(num , count);
    
    
}



int main() {
    int num ;
    printf("input : ");
    scanf ("%d",&num);
    fun ( num, 0);
    return 0;
}