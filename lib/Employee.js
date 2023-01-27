 class Employee {
    constructor(name, id, email){
        this.employeeName = name;
        this.employeeId = id;
        this.employeeEmail = email;
    }

    getName = function(){
        return this.employeeName;
    }

    getId = function(){
        return this.employeeId;
    }

    getEmail = function(){
        return this.employeeEmail;
    }

    getRole = function(){
        return 'Employee';
    }
}

//const employee = new Employee('Bill', 1, 'billsmith@gmail.com');

module.exports = Employee;