// Online C compiler to run C program online
#include <stdio.h>
int num (int number, int count, int sum){
    sum = sum + count;
    // printf("%d \n",count);
    
    
    
    // base case for condition is end
    if(count==number){
        printf("sun of first %d natural no. is : %d \n", number , sum);
        return 0;
    }
    return num( number , count+1 , sum);
};
int main() {
    
    int number ;
    printf("input number : ");
    scanf ("%d", &number );
    
    num(number,1 , 0);

    return 0;
}




