//PSEUDO CODE

//2. write the enquierer questions in index.js
//3. break down the classes/objects for the different positions
//three separate js files besides index.js they include Employee.js Engineer.js Intern.js
//create constructor inside Employee including name id email getname() getId() getEmail() getRole() (returns employee)
//4. extend Employee with Manager class which will include the office number and override getRole to return Manager
//5. extend Employee with Engineer class which will include gethub username getGitHub() and getRole() returns Engineer
//6. extend EMployee with Intern class wich will include school and getSchool() getRole() overridden to return Intern

const inquirer = require('inquirer');
const fs = require('fs');
const questions = ['Please enter manager name: ','Please enter employee ID: ', 'Please enter e-mail address',
                    'Please enter the team managers office number: ', 'Please select one of the following: ',
                    'Please enter engineer name: ', 'Please enter GitHub username: ', 'Please enter intern name: ',
                    'Please enter school: '];

init = function (){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: questions[0]
        }

    ])
    .then((data) =>{
        console.log(data);

    })
}

init();