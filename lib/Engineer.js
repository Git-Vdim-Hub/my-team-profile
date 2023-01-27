const employee = require('./Employee');

class Engineer extends employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.engineerGitHub = gitHub;
    }
    getGitHub = function () {
        return this.engineerGitHub;
    }
    getStatus = function () {
        return 'Engineer';
    }
}

module.exports = Engineer;