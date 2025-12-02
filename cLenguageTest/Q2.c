// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int n1 = 10;
    int n2 = 5;
    
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    
    
    printf("%d is n1 \n",n1);
    printf("%d is n2",n2);

    return 0;
}