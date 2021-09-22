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
        name: "license",
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

.then(function(answers) {
    console.log('answers from the prompt', answers)

    const createREADME = `
        #${answers.title}

        ##Description, Installation, Usage, Contributing, and Tests
        -${answers.aboutMyApp}

        ##License
        -${answers.license}

        ##Questions
        -<a href="https://github.com/${answers.GitHub}">My GitHub Profile</a>
        -${answers.email}
        `

    // TODO: Create a function to write README file
    fs.writeFile('README.md', createREADME, function(err, data) {
        console.log('err, data', err, data)
    });
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
