//import employee class
const employee = require('./Employee');
//creates the Manager class extending the Exmployee class
class Manager extends employee{
    constructor(name, id, email, phone ){
        super(name, id, email);
        this.managerPhone = phone;
    }
    //gets the managers phone number
    getPhone = function(){
        return this.managerPhone;
    }
    //overwrites the getRole function to Manager
    getRole = function(){
        return 'Manager';
    }

}

//exports the manager class
module.exports = Manager;