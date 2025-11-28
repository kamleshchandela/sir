// Online C compiler to run C program online
#include <stdio.h>




int main() {
    int num1 = 50;
    char num2 = 'a';
    float num3 = 50.123;
    int *num4 = &num1;
    char *num5 = &num2;
    float *num6 = &num3;
    
    printf("%d \n", num1);
    printf("%c \n", num2);
    printf("%f \n", num3);
    
    printf("%p \n", &num1);
    printf("%p \n", &num2);
    printf("%p \n", &num3);
    
    
    printf("%d \n", *num4);
    printf("%p nj \n", num4);
    printf("%p \n", &num4);
    
    
    printf("%c \n", *num5);
    printf("%p \n", num5);
    printf("%p \n", &num5);
    
    // num6 ki value => num3
    printf("%f \n", *num6);
    // add of num6 => joki num3 ke barabar he 
    // in donome (void*) ka use kiya he kyoki remot(TV remote) jese devise me lolavel par address store karneke liye halp karta he 
    // (void*) abhito likhne ki jarurat nahi he uparvalo me kahi parbhi nahi lihahe
    printf("%p \n", (void*)num6);
    // add of num6 jo uniche or vo num3 ka add storkarke rakhkha huaa he
    printf("%p \n", (void*)&num6);
    
    
    // %zu (or %d abhito dono chalege) use only for print sizeof(anything) in any devise
    printf("%zu \n", sizeof(num4));
    printf("%d \n", sizeof(num1));
    printf("%d \n", sizeof(num5));
    
    
    // // int *num4 = &num1;
    // // printf("add of &num1 : %p \n",&num1);
    // printf("add of num3 : %d \n", *num3);
    // printf("add of num3 : %d \n", num1);
    // num1 = 20;
    // printf("add of num3 : %d \n", num1);
    // // printf("add of &num1 : %p \n",&num3);
    // // printf("add of &num4 : %p \n",num4);
    
    
    
    return 0;
}