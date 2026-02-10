// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    int n ;
    std::cin >> n ;
    int num = n ;
    int temp;
    while(n>=1){
        temp = temp*10 + n%10 ;
        std::cout << temp << std::endl ;
        n = n / 10 ;
    }
    if(temp == num){
        std::cout << "true" ;
    }
    else{
        std::cout << "false" ;
    }
    return 0;
}