const inq = require("inquirer");
const mark = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message:
            "Please enter your first and last name for Copyright purposes:",
        name: "username",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message:
            "Please provide installation instructions about your project if applicable:",
        name: "installation",
    },
    {
        type: "input",
        message:
            "Please provide usage information about your project if applicable:",
        name: "usage",
    },
    {
        type: "list",
        message: "What type of license does your project use if applicable:",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
    {
        type: "input",
        message:
            "Please provide the contribution guidelines for the project if applicable:",
        name: "contribution",
    },
    {
        type: "input",
        message:
            "Please provide the test instructions for the project if applicable:",
        name: "testing",
    },
    {
        type: "input",
        message: "Please provide your GitHub username if applicable:",
        name: "githubUsername",
    },
    {
        type: "input",
        message:
            "Please provide the link to your GitHub profile if applicable:",
        name: "githubLink",
    },
    {
        type: "input",
        message: "Please provide your contact email if applicable:",
        name: "email",
    },
];

inq.prompt(questions).then((res) => {
    // console.log(res);

    const licBadge = checkLicense(res);
    const returnMD = mark.generateMarkdown(res);
    // console.log(returnMD);

    // function to write README file
    fs.writeFileSync("genReadme/README.md", returnMD, "utf8");
});

// function to initialize program
// function init() {}

// function call to initialize program
// init();

function checkLicense(res) {
    let badge;
    const currYear = new Date().getFullYear();
    switch (res.license) {
        case "Apache License 2.0":
            res.badge = `
                    Apache License
                Version 2.0, January 2004
            http://www.apache.org/licenses/
Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "GNU General Public License v3.0":
            res.badge = `
            GNU GENERAL PUBLIC LICENSE
              Version 3, 29 June 2007
Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "MIT License":
            res.badge = `   
            MIT License
Copyright :tm: ${currYear} ${res.username}`;
            break;
        case 'BSD 2-Clause "Simplified" License':
            res.badge = `
            BSD 2-Clause License
Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            res.badge = `BSD 2-Clause License
    Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "Boost Software License 1.0":
            res.badge = `Boost Software License - Version 1.0 - August 17th, 2003
                   Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "Creative Commons Zero v1.0 Universal":
            res.badge = `Creative Commons Legal Code
                        CC0 1.0 Universal
    Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "Eclipse Public License 2.0":
            res.badge = `Eclipse Public License - v 2.0
    Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "GNU Affero General Public License v3.0":
            res.badge = `GNU AFFERO GENERAL PUBLIC LICENSE
                        Version 3, 19 November 2007
        Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "GNU General Public License v2.0":
            res.badge = `GNU GENERAL PUBLIC LICENSE
                        Version 2, June 1991
        Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "GNU Lesser General Public License v2.1":
            res.badge = `GNU LESSER GENERAL PUBLIC LICENSE
                        Version 2.1, February 1999
        Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "Mozilla Public License 2.0":
            res.badge = `Mozilla Public License Version 2.0
        Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
        case "The Unlicense":
            res.badge = `The Unlicense
Copyright :tm: ${currYear}, ${res.username} All rights reserved.`;
            break;
    }

    // console.log(res);
    // const licBadge = res.badge;
}
