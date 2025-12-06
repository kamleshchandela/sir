// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int max = 0;
   int arr[8] = { 3 , 3 , 3, 3, 3 , 3 , 3 , 3 };
   for(int i = 0 ; i < sizeof(arr)/4 ; i++){
       for (int j = 0 ; j < sizeof(arr)/4 ; j++){
           if(arr[i] == arr[j]){
               if(max < j ){
                   max = j;
                   
               }
               
           }
       }
       
       if(max != i){
            printf("%d -> %d \n", arr[i] , max);
            if(max == 7){
                      continue;
            }
            max = 0;
       }
       
   }

    return 0;
}