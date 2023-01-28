 //employee class use by Engineer, Manager and Intern
 class Employee {
    //all employees take a name, id and email
    constructor(name, id, email){
        this.employeeName = name;
        this.employeeId = id;
        this.employeeEmail = email;
    }
//call employees name
    getName = function(){
        return this.employeeName;
    }
// call employees id
    getId = function(){
        return this.employeeId;
    }
// call employees email
    getEmail = function(){
        return this.employeeEmail;
    }
//call employees role
    getRole = function(){
        return 'Employee';
    }
}

//export the employee class
module.exports = Employee;