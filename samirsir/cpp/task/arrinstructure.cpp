// Online C++ compiler to run C++ program online
#include <iostream>
#include <cstdio>
#include <string>
struct user {
    int id ;
    char name[50] ;
};
int main() {
    user arr[3] ;
    // arr[0].id = 123 ;
    // printf("%d",arr[0].id) ;
    for(int i = 0 ; i < 3 ; i++){
        printf("arr[%d] id : ",i) ;
        scanf("%d",&arr[i].id);
        printf("arr[%d] name : ",i) ;
        scanf("%s",&arr[i].name);
        printf("%s \n",arr[i].name) ;
        
    }
    for(int i = 0 ; i < 3 ; i++){
        printf("%d \n",arr[i].id) ;
        printf("%s \n",arr[i].name) ;
        
        
    }
    

    return 0;
}