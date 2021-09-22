// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "aboutMyApp",
        message: "Provide the description, installation instructions, usage information, contribution guidelines, and test instructions.",  
    },
    {
        type: "list",
        name: "LinkedIn",
        choices: ["MIT", "Other"],  
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",  
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",  
    },
    
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
