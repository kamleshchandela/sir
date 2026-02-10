// Online C++ compiler to run C++ program online
#include <iostream>
#include <cstdio>

int main() {
    int n ;
    scanf("%d",&n);
    int f1 = 0 ;
    int f2 = 1 ;
    int f3 = 0 ;
    for(int i = 0 ; i < n ; i++){
        printf("%d \n", f3);
        f1 = f2 ;
        f2 = f3 ;
        f3 = f1 +f2 ;
    }

    return 0;
}