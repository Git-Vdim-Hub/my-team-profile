const employee = require('./Employee');

class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.internSchool = school;
    }

    getSchool = function () {
        return this.internSchool;
    }

    getStatus = function () {
        return 'Intern'
    }
}

module.exports = Intern;