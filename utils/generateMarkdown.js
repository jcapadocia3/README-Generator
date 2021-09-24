// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else (license === 'N/A')
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `${renderLicenseBadge(answers.license)}
  
# ${answers.title}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing Guidelines](#Contributing-Guidelines)
5. [Test Instructions](#Test-Instructions)
6. [License](#License)
7. [Questions](#Questions)

## Description
- ${answers.description}

## Installation
- ${answers.installInstruct}

## Usage
- ${answers.usageInfo}

## Contributing Guidelines
- ${answers.contribution}

## Test Instructions
- ${answers.testInstruct}

## License
- ${answers.license} License

## Questions
- GitHub Profile: <a href="https://github.com/${answers.GitHub}">Click Me!</a><br>
- My Email: ${answers.email}<br>
***Please feel free to contact me for more information***`;
};

module.exports = generateMarkdown;



// https://img.shields.io/github/license/jcapadocia3/README-Generator
