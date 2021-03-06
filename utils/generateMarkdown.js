// Function that returns a license badge based on which license is passed in via user input
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else (license === 'N/A')
    return 'No'
}

// Function that returns the official license policy that is determine by what the user chooses from the license list in the prompts
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `Copyright 2021

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === 'ISC'){
    return `Copyright 2021

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  } else (license === 'N/A')
    return 'No license information.'
}

// Function to generate markdown for README
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
- ${renderLicenseLink(answers.license)}

## Questions
- GitHub Profile: <a href="https://github.com/${answers.GitHub}">Click Me!</a><br>
- My Email: ${answers.email}<br>
***Please feel free to contact me for more information***`;
};

module.exports = generateMarkdown;
