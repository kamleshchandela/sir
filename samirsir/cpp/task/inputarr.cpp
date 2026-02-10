// Online C++ compiler to run C++ program online
#include <iostream>
#include <cstdio>

int main() {
    int n ;
    printf("arr.length : ");
    scanf("%d" , &n);
    int arr[n] ;
    int sum = 0 ; 
    for(int i = 0 ; i < n ; i++){
        printf("arr[%d] : " , i);
        scanf("%d" , & arr[i]);
        sum = sum + arr[i] ;
    }
    printf("sum : %d \n",sum) ;
    int ave = sum / n ;
    printf("ave : %d \n",ave) ;
    
    int count = 0 ;
    for(int i = 0 ; i < n ; i++){
        if(arr[i] > ave){
            count ++ ;
        }
    }
    printf("count : %d \n",count) ;
    
    

    return 0;
}