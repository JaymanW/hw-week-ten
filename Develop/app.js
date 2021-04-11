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
            // console.log(data.positionSelect);
            if (data.positionSelect === "Manager") {
                inquirer.prompt(managerQuestions)
                .then(input => {
                    const newManager = new Manager(input.id, input.name, input.email, input.officeNum);
                    employeeList.push(newManager);
                    generateQuestions();
                });
            } else if (data.positionSelect === "Engineer") {
                inquirer.prompt(engineerQuestions)
                .then(input => {
                    const newEngineer = new Engineer(input.id, input.name, input.email, input.github);
                    employeeList.push(newEngineer);
                    generateQuestions();
                });
            } else if (data.positionSelect === "Intern") {
                inquirer.prompt(internQuestions)
                .then(input => {
                    const newIntern = new Intern(input.id, input.name, input.email, input.school);
                    employeeList.push(newIntern);
                    generateQuestions();
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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
