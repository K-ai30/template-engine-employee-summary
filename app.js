const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = [];

// Ask which type of employee question
function askMainQuestion() {
    const mainQuestions = [
        {
            type: "list",
            message: "Enter team member's role:",
            name: "roleChoice",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        },
    ];
        inquirer
        .prompt(mainQuestions)
        .then(answers => {
            return answers.roleChoice;
            console.log(answers);
        })
}

// Ask all employees these main questions before asking for specific role questions
function askSecondaryQuestions() {
    const mainQuestions = [
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
      for(let i = 0; i < mainQuestions.length; i++) {
        inquirer
        .prompt(mainQuestions[i])
        .then(answers => {

        })
      }
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
function EngineerRole() {
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
            console.log("Answers: ", answers);
        })
    // })
}

// Ask intern specific questions for role details
function InternRole() {
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

// Do one for each of the job roles so I can call this later
function main() {
    let role = askMainQuestion();
    // ManagerRole();
    // EngineerRole();
    // Intern();
}
main();