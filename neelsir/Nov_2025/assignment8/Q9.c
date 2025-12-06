// Online C compiler to run C program online
#include <stdio.h>

int powerfun (int num, int power, int ans, int count){
    ans = ans * num;
    
    
    count++;
    if(count == power){
        printf("%d power %d is %d \n",num, power, ans);
        return 0;
    }
    
    
    
    return powerfun(num, power, ans, count);
}



int main() {
    int num;
    int power;
    printf("input number : ");
    scanf("%d",&num);
    printf("input power : ");
    scanf("%d",&power);
    
    powerfun(num, power, 1, 0);

    return 0;
}