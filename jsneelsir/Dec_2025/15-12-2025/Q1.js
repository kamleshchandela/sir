// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Name:", this.name);
  }
}

// Child class
class Student extends Person {
  constructor(name, rollNo) {
    super(name); // call parent constructor
    this.rollNo = rollNo;
  }

  showDetails() {
    console.log("Name:", this.name);
    console.log("Roll No:", this.rollNo);
  }
}

// Create object and call methods
const student1 = new Student("Rahul", 101);

student1.showName();
student1.showDetails();
