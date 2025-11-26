// Online C compiler to run C program online
#include <stdio.h>

int fun2( int palindrome , char str[]){
    if( palindrome == 1) {
        printf("%s is Palindrome \n", str);
    }
    return 0;
}

int strfun (int i , int j , int palindrome){
    
    ///////////////////////////////////
    
    char str[] = "kamlljak";
    
    ///////////////////////////////////
    
    j = sizeof(str) - 2 - i;
    
    // printf("%c \n", str[i]);
    
    // printf("%c \n", str[j]);
    
    // printf("%d %d \n", i , j);
    
    if(str[i] != str[j]){
        printf("%s is Not Palindrome \n", str);
        palindrome = 2;
        return 0;
    }
    
    
    
   
    
   i++;
    if(i >= sizeof(str) -1  ){
        fun2(palindrome , str);
        return 0;
    }
    
    
    
    
    return strfun (i , j , palindrome);
    
}






int main() {
    int palindrome = 1;
    strfun ( 0 , 0 , palindrome);
    

    return 0;
}