const inq = require("inquirer");
const mark = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message:
            "Please provide installation instructions about your project if applicable.?",
        name: "installation",
    },
    {
        type: "input",
        message:
            "Please provide usage information about your project if applicable.",
        name: "usage",
    },
    {
        type: "list",
        message: "What type of license does your project use if applicable?",
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
            "Please provide the contribution guidelines for the project if applicable.",
        name: "contribution",
    },
    {
        type: "input",
        message:
            "Please provide the test instructions for the project if applicable.",
        name: "testing",
    },
    {
        type: "input",
        message: "Please provide your GitHub username if applicable.",
        name: "githubUsername",
    },
    {
        type: "input",
        message:
            "Please provide the link to your GitHub profile if applicable.",
        name: "githubLink",
    },
    {
        type: "input",
        message: "Please provide your contact email if applicable.",
        name: "email",
    },
];

inq.prompt(questions).then((res) => {
    // console.log(res);
    const returnMD = mark.generateMarkdown(res);
    console.log(returnMD);
});

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {}

// function call to initialize program
// init();
