const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeList = [];

// QUESTION BANKS
const managerQuestions = require('./questions/managerQuestions');
const engineerQuestions = require('./questions/engineerQuestions');
const internQuestions = require('./questions/internQuestions');

const selectPosition = [
    {
        type: "list",
        name: "positionSelect",
        message: "Please select this employees position.",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const generateQuestions = () => {
    inquirer.prompt(selectPosition)
        .then(data => {
            if (data.positionSelect === "Manager") {
                inquirer.prompt(managerQuestions)
                .then(input => {
                    const newManager = new Manager(input.id, input.name, input.email, input.officeNum);
                    employeeList.push(newManager);
                    newPosition();
                });
            } else if (data.positionSelect === "Engineer") {
                inquirer.prompt(engineerQuestions)
                .then(input => {
                    const newEngineer = new Engineer(input.id, input.name, input.email, input.github);
                    employeeList.push(newEngineer);
                    newPosition();
                });
            } else if (data.positionSelect === "Intern") {
                inquirer.prompt(internQuestions)
                .then(input => {
                    const newIntern = new Intern(input.id, input.name, input.email, input.school);
                    employeeList.push(newIntern);
                    newPosition();
                });
            }
        })
}

const newPosition = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "newPosition",
            message: "Do you have another position to enter?"
        }
    ]).then(data => {
        if (data.newPosition === true) {
            generateQuestions();
        } else {
            fs.writeFile(outputPath, render(employeeList), err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Successfully generated team roster!`);
                }
            })
        }
    })
}

const startup = () => {
    console.log(`Beginning team builder. Begin by choosing your first position!`);
    generateQuestions();
}

startup();
