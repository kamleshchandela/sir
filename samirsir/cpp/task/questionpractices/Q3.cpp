// Private Static Member:
// Config class: 
// private static int value=0; 
// static setter setValue(int v), static getter getValue(). 
// Main: Config::setValue(42);
//  cout << Config::getValue() → 42.#include <iostream>

#include <iostream>
using namespace std;
class Config {
    private :
        static int value ;
    public :
        static void setValue(int v){
            value = v ;
        }
        static int getValue(){
            return value ;
        }
};
int Config::value = 0 ; 
int main() {
    // Write C++ code here
    Config::setValue(42) ;
    cout << Config::getValue() ;
    // std::cout << "Try programiz.pro";

    return 0;
}














