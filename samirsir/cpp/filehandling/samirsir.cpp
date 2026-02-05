#include<iostream>
#include<fstream>
#include<string>
#include <cstdio>

using namespace std ;

int main () {
    // string one ;
    // ifstream file ;
    // file.open("simple.txt");
    // string name ;
    // cin >> name ;

    // if(file.is_open()){
    //     getline(cin , name);
    //     cout << name << endl;
    //     while(getline(file , one)) {
    //         cout << one << endl ;
    //     }
    //     file.close() ;
    // }


    char sign;
    int n1 ; 
    int n2 ; 
    printf("Enter Number a : ") ;
    scanf("%d",&n1);
    printf("Enter Number b : ") ;
    scanf("%d",&n2);
    printf("Enter + , - , / , * : ") ;
    scanf(" %c",&sign);


    if(sign == '+'){
        printf("%d \n" , n1 + n2) ;
    }
    else if (sign == '-'){
        printf("%d \n" , n1 - n2) ;
    }
    else if (sign == '*'){
        printf("%d \n" , n1 * n2) ;
    }
    else if (sign == '/'){
        printf("%d \n" , n1 / n2) ;
    }
    else{
        printf ("Your input is wrong you can input only + , - , * and / only .");
    }

    switch (sign) {
        case '+' : printf("%d \n" , n1 + n2); break ;
        case '-' : printf("%d \n" , n1 - n2); break ;
        case '*' : printf("%d \n" , n1 * n2); break ;
        case '/' : printf("%d \n" , n1 / n2); break ;
        default : printf("Your input is wrong you can input only + , - , * and / only .");
    }

    




}
