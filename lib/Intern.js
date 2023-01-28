// calls employee class
const employee = require('./Employee');
//creates the intern class extending the employee class
class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.internSchool = school;
    }
    //gets the interns scool
    getSchool = function () {
        return this.internSchool;
    }
    //overwrites the getRole function with Intern
    getRole = function () {
        return 'Intern'
    }
}
//exports the intern class/file
module.exports = Intern;