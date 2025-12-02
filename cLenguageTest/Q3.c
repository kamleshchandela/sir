// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int arr[7] = { 20, 32, 6, 7, 22, 47, 21};
    int max = arr[0];
    int min = arr[0];
    for(int i = 0; i < sizeof(arr)/4 - 1 ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    printf("%d is max \n",max);
    printf("%d is min \n",min);

    return 0;
}