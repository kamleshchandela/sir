#include <iostream> 
#include <vector> 

using namespace std ;

int main () {
    vector<int> val = {10 , 20 , 30} ;

    std::cout << val[2] << std::endl ;

    for(int i = 0 ; i < val.size() ; i++){
        cout << i << endl ;
        val.push_back(5) ;
    }
    std::cout << val[5] << std::endl ;

    return 0 ;

}



