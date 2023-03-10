//calls all required classes, files and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//used to store html code before fs.writeFile() is called
var htmlBuild = '';
//questions used by inquirer
const questions = ['Please enter manager name: ','Please enter employee ID: ', 'Please enter e-mail address',
    'Please enter the team managers office number: ', 'Please select one of the following: ','Please enter engineer name: ',
    'Please enter GitHub username: ', 'Please enter intern name: ','Please enter school: '];
//initializes the application
init = function (){
    askManagerQuestions();
}

//the initial questions asked when running this application
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
            type: 'input',
            name: 'managerPhone',
            message: questions[3]
        }

    ])
    .then((data) =>{
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerPhone);
        writeManagerBaseHTML(manager.getName(), manager.getId(), manager.getEmail(), manager.getPhone())
        askTeamChoice();
    })
}
//list question ased using inquirer to determine if an intern, engineer needs
//to be added to the team, or if the team is built and the html file needs to be created
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
        // if engineer is selected, ask engineer questions
        if(data.teamSelection === 'Engineer'){
            askEngineerQuestions();
        //if Intern is selected, ask Intern questions
        } else if(data.teamSelection === 'Intern'){
            askInternQuestions();
            // how to finish the team construct and render the team.html file
        } else if(data.teamSelection === 'Finish Building My Team'){
            //finish writing the closing divs and link bootstrap
            writeBottomHTML();
            //render the team.html file with htmlBuild variable
            fs.writeFile('./dist/team.html',htmlBuild , (err) =>{
                if (err) throw err;
                console.log('The file has been saved!');
            })
        }
    })
}
// engineer questions
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
        // create a new engineer object
        let engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub);
        // call the engineer object to add to the Html build variable
        writeEngineerCard(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGitHub());
        //ask prompt for the team choice again
        askTeamChoice();
    })
}
// intern tquestions
askInternQuestions = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: `internName`,
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
        //declare a new intern object
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        //call the intern object to add the intern data to the html variable
        writeInternCard(intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool());
       //ask what to do next
        askTeamChoice();
    })
}
// add html code to htmlBuild for a manager 
writeManagerBaseHTML = function(name, id, email, phone){
    htmlBuild += `<!DOCTYPE html>
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
            <div class="row justify-content-md-center" id="cardSelector">
                <div class="col-md-4 gy-3">
                  <div class="card">
                      <h5 class="card-header border-bottom-0 text-white" style="background-color: #0d6efd;">${name}</h5>
                      <h6 class="card-header border-0 text-white" style="background-color: #0d6efd;">
                        <i class="bi bi-cup-hot"></i> Manager</h6>
                      <div class="card-body row justify-content-center">
                          <div class="card" style="width: 18rem;">
                              <ul class="list-group list-group-flush text-left">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email:
                                <a href="mailto:${email}" class="card-link text-decoration-none">${email}</a>
                                </li>
                                <li class="list-group-item">Office Number: ${phone}</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                </div>
          `
}
//add html code for an engineer to htmlBuild
writeEngineerCard = function(name, id, email, gitHub){
    htmlBuild += `
    <div class="col-md-4 gy-3">
        <div class="card">
            <h5 class="card-header border-bottom-0 text-white" style="background-color: #0d6efd;">${name}</h5>
            <h6 class="card-header border-0 text-white" style="background-color: #0d6efd;">
            <i class="bi bi-eyeglasses"></i> Engineer</h6>
            <div class="card-body row justify-content-center">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush text-left">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email:
                        <a href="mailto:${email}" class="card-link text-decoration-none">${email}</a>
                    </li>
                    <li class="list-group-item">GitHub:
                        <a href="https://github.com/${gitHub}" target="_blank" class="card-link text-decoration-none">${gitHub}</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
  `;
}
//add html code for an intern card to htmlBuild
writeInternCard = function (name, id, email, school) {
    htmlBuild += `
    <div class="col-md-4 gy-3">
    <div class="card">
        <h5 class="card-header border-bottom-0 text-white" style="background-color: #0d6efd;">${name}</h5>
        <h6 class="card-header border-0 text-white" style="background-color: #0d6efd;">
          <i class="bi bi-mortarboard"></i> Intern</h6>
        <div class="card-body row justify-content-center">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush text-left">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email:
                    <a href="mailto:${email}" class="card-link text-decoration-none">${email}</a>
                  </li>
                  <li class="list-group-item">School: ${school}</li>
                </ul>
              </div>
        </div>
      </div>
  </div>
    `
}
//write the bottom of the html file
writeBottomHTML = function () {
    htmlBuild += `
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>`
}

init();