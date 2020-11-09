// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description

${data.description}

## Table of Contents
- Installation
- Usage Information
- License
- Contribution Guidelines
- Test Instructions
- Questions
- Screenshots

## Installation

${data.installation}

## Usage Information

${data.usage}

## License

This project is utilizing the ${data.license}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.testing}

## Questions
If there are further questions please contact me with the following.

Github: ${data.githubUsername} - ${data.githubLink}

Email: ${data.email}

## Screenshots

<img src = "${data.image}">
`;
}

module.exports = { generateMarkdown };
