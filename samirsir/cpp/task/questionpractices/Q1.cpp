// Static Object Counter
// Employee class: private string name, public constructor increments static int totalEmployees and sets name. Static getTotal() returns count. Main: create 4 employees, print total=4.

#include <iostream>
using namespace std;

class Employee {
private:
    string name;                 // employee ka naam store karega
    static int totalEmployees;   // sab objects ke liye common counter

public:
    // Constructor
    Employee(string n) {
        name = n;                // name assign kar rahe hain
        totalEmployees++;        // har object banne par count increase
    }

    // Static function
    static int getTotal() {
        return totalEmployees;   // total employees return karta hai
    }
};

// Static variable ko class ke bahar initialize karna zaruri hai
int Employee::totalEmployees = 0;

int main() {
    Employee e1("Aman");   // 1st object → count = 1
    Employee e2("Rahul");  // 2nd object → count = 2
    Employee e3("Neha");   // 3rd object → count = 3
    Employee e4("Priya");  // 4th object → count = 4

    cout << "Total Employees = " << Employee::getTotal();

    return 0;
}














