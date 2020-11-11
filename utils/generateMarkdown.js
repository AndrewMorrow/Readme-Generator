// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation Instructions

${data.installation}

## Usage Information

${data.badge}

${data.usage}

## License

This project is utilizing the ${data.license}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.testing}

## Questions
If there are further questions please contact me with the following.

<img src = "images/githubLogoCrop.png" alt= 'Github Logo' width="15px" height="15px"> ${data.githubUsername} - <a href="${data.githubLink}" target= "_blank">Github</a>

Email: ${data.email}
`;
}

module.exports = { generateMarkdown };
