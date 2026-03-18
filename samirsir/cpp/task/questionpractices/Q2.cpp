// Encapsulated Rectangle Class:
// Write Rectangle class with private double width, height. Public methods: setDimensions(double w, double h) (validate >0), getArea() returns widthheight, getPerimeter() returns 2(w+h). Main: create object, set 5x3, print area=15, perimeter=16.


#include <iostream>
using namespace std;

class Rectangle {
private:
    double width, height;   // private data (hidden)

public:
    // set dimensions with validation
    void setDimensions(double w, double h) {
        if(w > 0 && h > 0) {   // validation
            width = w;
            height = h;
        } else {
            cout << "Invalid dimensions!" << endl;
        }
    }

    // function to calculate area
    double getArea() {
        return width * height;
    }

    // function to calculate perimeter
    double getPerimeter() {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle r;   // object create

    r.setDimensions(5, 3);   // set width=5, height=3

    cout << "Area = " << r.getArea() << endl;
    cout << "Perimeter = " << r.getPerimeter() << endl;

    return 0;
}
















