/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include<fstream>
#include <vector>
using namespace std ;

int main()
{
    // std::cout<<"Hello World \n";
    // ofstream Myfile1("tex.txt" , ios::app) ;
    // Myfile1 << "Jay Swaminarayan ok" << endl ;
    // Myfile1.close() ;
    
    // ifstream Myfile("tex.txt") ;
    // string s ;
    // while(getline(Myfile , s)){
    //     cout << s << endl ;
    // }
    // Myfile.close() ;
    
    vector <int> ok = {1 , 2 ,3 ,4} ;
    // cout << ok.empty() << endl ;
    // ok.insert(ok.begin()  , 4) ;
    // ok.insert(ok.begin() + 1 , 4) ;
    // ok.insert(ok.begin() + 2 , 4) ;
    ok.insert(ok.begin() + 2 , 14) ;
    
    for(int x : ok){
        cout << x << endl ;
    }

    return 0;
}