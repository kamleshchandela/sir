// Online C compiler to run C program online
#include <stdio.h>

int sumfun (int sum, int count){
    int arr[] = {1, 2, 3, 4, 5};
    sum = sum + arr[count];
    
    count ++;
    if(count == sizeof(arr)/4){
        printf("sum of arr element is : %d \n",sum);
        return 0;
    }
    
    return sumfun ( sum, count);
}






int main() {
    
    sumfun (0, 0);

    return 0;
}