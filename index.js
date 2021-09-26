// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide the description for your app.",  
    },
    {
        type: "input",
        name: "installInstruct",
        message: "Provide the installation instructions for your app.",  
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Provide the usage information for your app.",  
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide the contribution guidelines for your app.",  
    },
    {
        type: "input",
        name: "testInstruct",
        message: "Provide the test instructions for your app.",  
    },
    {
        type: "list",
        name: "license",
        message: "Choose a lincense for your project.",  
        choices: ["MIT", "ISC", "N/A"],
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
    
];

// TODO: Create a function to write README file
function writeReadMe(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("All data created in README.")
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log('answers from the prompt', answers);
        writeReadMe("newREADME.md", generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
