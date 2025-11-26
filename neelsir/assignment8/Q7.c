// Online C compiler to run C program online
#include <stdio.h>

int maxfun (int max, int i ){
    
    int arr[] = {12, 15, 5, 2, 14,3, 4, 8, 12};
    if(max < arr [i]){
            max = arr [i];
            
        }
        
        i++;
        if(i == sizeof(arr)/4){
            printf("max in arr is : %d \n",max);
            return 0;
        }
        
        
        
        return maxfun(max, i);
}


int main() {
    
    
    
    maxfun(0, 0);

    return 0;
}