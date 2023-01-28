const employee = require('./Employee');

class Engineer extends employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.engineerGitHub = gitHub;
    }
    getGitHub = function () {
        return this.engineerGitHub;
    }
    getRole = function () {
        return 'Engineer';
    }
}
//const engineer = new Engineer('Jack', '1', 'jackjohn@gmail.com', 'jack-john');
//console.log(engineer.getRole())

module.exports = Engineer;