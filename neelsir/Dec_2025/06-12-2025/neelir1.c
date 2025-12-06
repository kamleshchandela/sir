// Online C compiler to run C program online
#include <stdio.h>
int count () {
    static int num = 10;
    num = num + 3;
    printf("%d \n" , num);
}
int main() {
    
    
    auto int num1 = 10;
    static int num2 = 13;
    register int num3 = 15;
   
   printf("%d \n", num1);
   printf("%d \n", num2);
   printf("%d \n", num3);


    int *n1 = &num1 ;
    int *n2 = &num2 ;
    
    // niche vali line me error aayegi kyuki register me data CPU me store hota he or C language ke pas CPU ka address dhundne ka ecces nahi hotahe
    int *n3 = &num3 ;

    
   
 
    
    count();
    count();

    return 0;
}