// Online C compiler to run C program online
#include <stdio.h>

int obj1 (){
    int v1 = 1;
    printf("function ke andar print kiya he : %d",v1);
    return v1;
}
float obj2 (){
    float v2 = 2.22;
    
    return v2;
}
char obj3 (){
    int v3 = 'A';
    
    return v3;
}





int main() {
    
    int o1 = obj1();
    float o2 = obj2();
    char o3 = obj3();
    
    
    // method 1
    printf("%d \n",o1);
    printf("%.3f \n",o2);
    printf("%c \n",o3);
    
    // method 2
    printf("%d \n",obj1());
    printf("%.3f \n",obj2());
    printf("%c \n",obj3());
    
    
    
    
    
    
    
    
    
    
    
    
    

    return 0;
}