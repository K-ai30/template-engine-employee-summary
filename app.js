const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = [];

// Ask all employees these main questions before asking for specific role questions
function askMainQuestions() {
    const mainQuestions = [
        {
            type: "list",
            message: "Enter team member's role:",
            name: "roleChoice",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        },
        // Ask all employees these main questions before asking for specific role questions
        {
            type: "input",
            message: "Enter team member's name:",
            name: "employeeName"
        },
        {
            type: "input",
            message: "Enter team member's ID:",
            name: "employeeID"
        },
        {
            type: "input",
            message: "Enter team member's email:",
            name: "employeeEmail",
        }
    ];
        inquirer
        .prompt(mainQuestions)
        .then(answers => {
            console.log('Answers: ', answers);
            if (answers.roleChoice === 'Manager') {
                ManagerRole(answers);
                console.log('Manager title');
            } else if (answers.roleChoice === 'Engineer') {
                EngineerRole(answers);
                console.log('Engineer title');
            } else if (answers.roleChoice === 'Intern') {
                InternRole(answers);
                console.log('Intern title');
            } else {
                console.log('I am done!');
            }
            return answers.roleChoice;  //end of the function
        })
}

// Ask manager specific questions for role details
function ManagerRole() {
    // askMainQuestions().then(function() {
        const managerQuestions = [
          {
              type: "input",
              message: "Enter your office number:",
              name: "officeNumber"
          }
        ];
    
        inquirer
        .prompt(managerQuestions)
        .then(answers => {
            console.log("Answers: ", answers);
        })
    // })
}

// Ask engineer specific questions for role details
function EngineerRole(mainAnswers) {
    // askMainQuestions().then(function() {
        const engineerQuestions = [
          {
              type: "input",
              message: "Enter engineer's GitHub username:",
              name: "GHUsername"
          }
        ];
    
        inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            team.push({
                title: mainAnswers.roleChoice,
                name: mainAnswers.employeeName,
                id: mainAnswers.employeeID,
                email: mainAnswers.employeeEmail
            })
        })
    // })
}

// If the user is finished, then stop the program, or ask the main questions again if they are not.
const finishQuestions = [
    {
        type: "checkbox",
        message: "Are you finished?",
        name: "isComplete",
        choices: ['Yes', 'No']
    }
];
inquirer
.prompt(finishQuestions)
.then(function(data) {
    console.log('Data: ', data);
    if (data.isComplete[0] === 'Yes') {
        const engineerData = generateTemplate(team);  // generate template
        createRoleFile(engineerData);
        console.log("Answers: ", answers);
    } else {
        askMainQuestion();
    }
})

function createRoleFile(data) {
    fs.writeFile('./output/team.html', data, 'UTF-8', function(error, data) {
        if (error) {
            console.log('File cannot be written!');
        } else {
            console.log('File written!');
        }
    })
}

// Ask intern specific questions for role details
function InternRole(mainAnswers) {
    // askMainQuestions().then(function() {
        const internQuestions = [
          {
              type: "input",
              message: "Enter intern's school:",
              name: "schoolName"
          }
        ];

        inquirer
        .prompt(internQuestions)
        .then(answers => {
            console.log("Answers: ", answers);
        })
    // })
}

function main() {
    let team = [] // array of member attributes,
    while (input != 'done') {
        let role = askMainQuestions()
    }
    members = [];
    for (member in team){
        members.push(makeMember(member));
    }
    memberTemplates = [];
    for (member in members){
        memberTemplate.push(makeMemberTemplate(member));
    }
    for(template in memberTemplates){
        // add them to the layout
    }
    //fs.write(layout) to the File.
    // let role = askMainQuestion();
    // ManagerRole();
    // EngineerRole();
    // Intern();
}

main();