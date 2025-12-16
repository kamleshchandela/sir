

// Base class
class User {
  constructor(username) {
    this.username = username;
  }

  showUsername() {
    console.log("Username:", this.username);
  }
}

// Intermediate class
class Employee extends User {
  constructor(username, employeeId) {
    super(username);
    this.employeeId = employeeId;
  }

  showEmployeeId() {
    console.log("Employee ID:", this.employeeId);
  }
}

// Derived class
class Manager extends Employee {
  constructor(username, employeeId, department) {
    super(username, employeeId);
    this.department = department;
  }

  showManagerDetails() {
    console.log("Username:", this.username);
    console.log("Employee ID:", this.employeeId);
    console.log("Department:", this.department);
  }
}

// Create object and call methods
const manager1 = new Manager("adminUser", 5001, "IT");

User.showUsername();
manager1.showEmployeeId();
manager1.showManagerDetails();






















