
// Q2. Write a C program to swap two numbers using pointers.


#include <stdio.h>

int main() {
    
    int num1 = 5;
    int num2 = 10;
    printf("num1 : %d \n",num1);
    printf("num2 : %d \n",num2);
    
    int *n1 = &num1; 
    int *n2 = &num2; 
    
    // method 1 : simple method
    int temp = *n1;
    *n1 = *n2;
    *n2 = temp;
    
    printf("num1 : %d \n",num1);
    printf("num2 : %d \n",num2);
    
    
    // method 2 :
    // saimaja jevi chhe
    // dhyanthi paheli line ma *n1 ni value aave tene biji linema mokalvi and bijiline ma *n2 ni value aave tene triji line ma vaparvi  lineto line solve kavu jetji sahelu pade 
    
    *n1 = *n1 + *n2;
    *n2 = *n1 - *n2;
    *n1 = *n1 - *n2;
    
    printf("%d \n",num1);
    printf("%d \n",num2);
    
    
    
    

    return 0;
}