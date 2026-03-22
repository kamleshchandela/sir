#include <iostream>
#include <fstream>
#include <string>
using namespace std ;

int main () {

    fstream Myfile1 ("txt.txt" , ios::app) ;
    Myfile1 << "Jay shree swaminarayan" << endl ;
    Myfile1.close() ;

    fstream Myfile2("txt.txt" , ios::in) ;
    string s ;
    while(getline(Myfile2 , s)){
        cout << s << endl ;
    }
    Myfile2.close() ;


    return 0 ;
}



