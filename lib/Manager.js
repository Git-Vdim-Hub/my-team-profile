const employee = require('./Employee');
class Manager extends employee{
    constructor(name, id, email, phone ){
        super(name, id, email);
        this.managerPhone = phone;
    }
    getPhone = function(){
        return this.managerPhone;
    }
    getRole = function(){
        return 'Manager';
    }

}
const manager = new Manager("Fred", 2, 'fredsims@gmail.com', '321-123-1234');
console.log(manager.getRole());

module.exports = Manager;