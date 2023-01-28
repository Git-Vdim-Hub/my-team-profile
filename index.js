//PSEUDO CODE
//1. get the fs to originally write the bare file with the header and the manager
//2. then getQuerySelector to add all the other cards
//2. Break down the code per card?
// create a function to create the page
// create a function for each of the roles (Manager, Engineer, Intern)

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
        fs.writeFile('./dist/team.html', writeBaseHTML(), (err) =>{
            if (err) throw err;
            console.log('The file has been saved!');
        })
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

writeBaseHTML = function(){
    let htmlCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <title>MyTeam</title>
    </head>
    <body class="row justify-content-md-center">
    
        <nav class="navbar bg-danger">
            <div class="container-fluid justify-content-center">
                <span class="navbar-brand m-4 h1 text-white">My Team</span>
            </div>
        </nav>
        <div class="container text-center">
          <div class="row align-items-center">
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="col-md-8 align-items">
              <div class="row justify-content-md-center">
                <div class="col-md-4 gy-3">
                  <div class="card">
                      <h5 class="card-header border-bottom-0 text-white" style="background-color: #0d6efd;">Jared</h5>
                      <h6 class="card-header border-0 text-white" style="background-color: #0d6efd;">
                        <i class="bi bi-cup-hot"></i> Manager</h6>
                      <div class="card-body row justify-content-center">
                          <div class="card" style="width: 18rem;">
                              <ul class="list-group list-group-flush text-left">
                                <li class="list-group-item">ID: 1</li>
                                <li class="list-group-item">Email:
                                  <a href="#" class="card-link text-decoration-none">jared@fakeemail.net</a>
                                </li>
                                <li class="list-group-item">Office Number: 444-444-3212</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                </div>
              </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>   
    </body>
    </html>`
    return htmlCode;
}

init();