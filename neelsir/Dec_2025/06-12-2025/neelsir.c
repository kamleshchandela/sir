// Online C compiler to run C program online
#include <stdio.h>

int fibo (){
    static int f3 = 0;
    printf("%d \n",f3);
    static int f1 = 0;
    static int f2 = 1;
    
    
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
    
    
    
    return fibo ();
}



int main() {
    fibo ();

    return 0;
}