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
let members = 1;
const questions = ['Please enter manager name: ','Please enter employee ID: ', 'Please enter e-mail address',
    'Please enter the team managers office number: ', 'Please select one of the following: ','Please enter engineer name: ',
    'Please enter GitHub username: ', 'Please enter intern name: ','Please enter school: '];

init = function (){
    askManagerQuestions();
}


askManagerQuestions = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: questions[0]
        },
        {
            type: 'number',
            name: 'managerID',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: questions[2]
        },
        {
            type: 'number',
            name: 'managerPhone',
            message: questions[3]
        }

    ])
    .then((data) =>{
        console.log(data);
        askTeamChoice();
    })
}

askTeamChoice = function(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamSelection',
            message: questions[4],
            choices: ['Engineer', 'Intern', 'Finish Building My Team']
        }
    ])
    .then((data) =>{
        console.log(data.teamSelection);
        if(data.teamSelection === 'Engineer'){
            askEngineerQuestions();
        } else if(data.teamSelection === 'Intern'){
            askInternQuestions();
        } else if(data.teamSelection === 'Finish Building My Team'){
            return;
        }
    })
}

askEngineerQuestions = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: `engineerName`,
            message: questions[5]
        },
        {
            type: 'input',
            name: 'engineerID',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: questions[6]
        }
    ])
    .then((data) =>{
        console.log(data);
        askTeamChoice();
    })
}

askInternQuestions = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: `InternName`,
            message: questions[7]
        },
        {
            type: 'input',
            name: 'internID',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'internEmail',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'internSchool',
            message: questions[8]
        }
        
    ])
    .then((data) => {
        console.log(data);
        askTeamChoice();
    })
}

init();