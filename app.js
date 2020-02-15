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
}

// Ask manager specific questions for role details
function ManagerRole() {
    askMainQuestions();

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
}

// Ask engineer specific questions for role details
function EngineerRole() {
    askMainQuestions();

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
}

// Ask intern specific questions for role details
function InternRole() {
    askMainQuestions();

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
}