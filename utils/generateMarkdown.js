// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing Guidelines](#Contributing-Guidelines)
6. [Test Instructions](#Test-Instructions)
7. [License](#License)
8. [Questions](#Questions)

## Description
-${answers.description}

## Installation
-${answers.installInstruct}

## Usage
-${answers.usageInfo}

## Contributing Guidelines
-${answers.contribution}

## Test Instructions
-${answers.testInstruct}

## License
-${answers.license} License

## Questions
-GitHub Profile: <a href="https://github.com/${answers.GitHub}">My GitHub Profile</a>
-My Email: ${answers.email}
-***Please feel free to contact me for more information***`;
};

module.exports = generateMarkdown;



// https://img.shields.io/github/license/jcapadocia3/README-Generator
