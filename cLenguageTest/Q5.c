// Online C compiler to run C program online
#include <stdio.h>

int fect (int num , int count , int temp ){
    temp = temp * count ;
    
    if(num == count){
        printf("%d is fectorial of %d", temp , num);
        return 0;
        
    }
    
    count ++;
    
    
    
    
    return fect ( num , count , temp);
    
}


int main() {
    int num ;
    printf("input : ");
    scanf ("%d", &num);
    fect (num , 1 , 1);
    return 0;
}

