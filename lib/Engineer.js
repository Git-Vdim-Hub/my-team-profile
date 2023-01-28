//import employee class
const employee = require('./Employee');
//create the engineer class that extends employee
class Engineer extends employee {
    //pass same data as employee only with github username added
    constructor(name, id, email, gitHub){
        //pass first three parameters back to employee class
        super(name, id, email);
        this.engineerGitHub = gitHub;
    }
    //call github username
    getGitHub = function () {
        return this.engineerGitHub;
    }
    //overwrite employee role with Engineer
    getRole = function () {
        return 'Engineer';
    }
}

module.exports = Engineer;