
// Q3. Write a C program to print all elements of an array using pointer arithmetic (not using array indexes).


#include <stdio.h>

int main() {
    
    int arr[5] = {34, 72, 84, 91, 29};
    
    int *p = &arr[0];
    
    // printf("%d \n", *p);
    // printf("%p \n", p);
    // printf("%p \n", &arr[3]);
    
    printf("sizeof(arr)/4 : %d \n",sizeof(arr)/4);
    
    printf("for loop : %d \n",sizeof(arr)/4);
    for(int i = 0; i < sizeof(arr)/4 ; i++){
        printf("%d \n",*(p + i));
    }
    
    
    printf("while loop : %d \n",sizeof(arr)/4);
    int i = 0;
    while(i < sizeof(arr)/4){
        printf("%d \n",*(p + i));
        i++;
    }
    

    return 0;
}