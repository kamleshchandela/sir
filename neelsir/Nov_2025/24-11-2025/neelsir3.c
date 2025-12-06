// Online C compiler to run C program online
#include <stdio.h>

int obj1 (int num){
    if(num < 0){
        
        // yaha return 0 , 1 , 2, 30 kuchhbhi karo lekin loopna chale esa karo or use printf nhi karvaya esliye vosirf function ko band karne ke kam hi aayega
        return 50;
    }
    printf("%d \n",num);
    
    
    // function ko barbar call horaha he
    return obj1(num-1);
}


// fectorial vala
int fect (int num1 ,int value){
    if(num1 == 0){
      
        return 5;
    }
    
      printf("value : %d , num1 : %d fect \n",value,num1);
    value = value * num1;
    
    
    return fect(num1 - 1 , value);
}



int main() {
    obj1(10);
    
    
    
    int value = 1;
    fect(5,1);

    return 0;
}