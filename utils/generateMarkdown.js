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

## Description
-${answers.description}

## Installation
-${answers.installInstruct}

## Usage
-${answers.usageInfo}

## Contributing
-${answers.contribution}

## Tests
-${answers.testInstruct}

## License
-${answers.license}

## Questions
-<a href="https://github.com/${answers.GitHub}">My GitHub Profile</a>
-${answers.email}`;
};

module.exports = generateMarkdown;



// https://img.shields.io/github/license/jcapadocia3/README-Generator
