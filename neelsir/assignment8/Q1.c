// Online C compiler to run C program online
#include <stdio.h>
int num (int number, int count){
    
    printf("%d \n",count);
    
    
    // base case for condition is end
    if(count==number){
        return 0;
    }
    return num( number , count+1);
};
int main() {
    
    int number ;
    printf("input number : ");
    scanf ("%d", &number);
    
    num(number,1);

    return 0;
}