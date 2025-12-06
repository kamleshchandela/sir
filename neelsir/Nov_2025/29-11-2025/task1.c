
// Q1. Write a C program to print the value and address of a variable using a pointer.


#include <stdio.h>

int main() {
    int num1 = 10;
    int num2 = 3;
    int *n1 = &num1;
    
    printf("add &num1 : %p \n",&num1);
    printf("same add &num1 & n1 : %p \n",n1);
    printf("unic add (&num1 diff &n1) : %p \n",&n1);
    printf("value num1 : %d \n", num1);
    printf("value *n1 (num1 sam *n1): %d \n", *n1);
    


    // esa karke ham add and value change and assign karsakte he ye imp he ise yad rakhna he samajna or samjna he
    
    // n1 = &num2;
    // *n1 = 20;
    
    // printf("%d \n",*n1);
    // printf("%p \n", &n1);
    // printf("%p \n",&num2);
    // printf("%d \n",num2);
    
    
    
    
    
    
    
    
    

    return 0;
}