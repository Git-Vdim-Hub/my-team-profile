const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, phone ){
        super(name, id, email);
        this.managerPhone = phone;
    }

}
// console.log(Employee);

module.exports = Manager;