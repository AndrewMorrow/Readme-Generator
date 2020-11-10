// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${data.badge}

## Description

${data.description}

## Table of Contents
- [Installation Instructions](##-installation-instructions)
- [Usage Information](##-usage-information)
- [License](##-license)
- [Contribution Guidelines](##-contribution-guidelines)
- [Test Instructions](##-test-instructions)
- [Questions](##-questions)
- [Screenshots](##-screenshots)

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

<img src = "images/githubLogo.png" alt= 'Github Logo' width="30px" height="30px"> ${data.githubUsername} - [Github Profile](${data.githubLink})

Email: ${data.email}

## Screenshots

<img src = "${data.image}" alt= 'Screenshot of the program' width="30px" height="30px">
`;
}

module.exports = { generateMarkdown };
