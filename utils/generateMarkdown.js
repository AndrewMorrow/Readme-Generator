// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${data.badge}

## Description

${data.description}

## Table of Contents
- [Installation Instructions](##installation-instructions)
- [Usage Information](##usage-information)
- [License](##license)
- [Contribution Guidelines](##contribution-guidelines)
- [Test Instructions](##test-instructions)
- [Questions](##questions)
- [Screenshots](##screenshots)

## Installation Instructions

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

![GitHub Logo](images/githubLogo.png) ${data.githubUsername} - [Github](${data.githubLink})

Email: ${data.email}

## Screenshots

<img src = "${data.image}">
`;
}

module.exports = { generateMarkdown };
