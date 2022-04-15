// Importing required packages and generateMarkdown.js
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Added inquirer prompts to init() function to gather user inputs for README details
function init() {
    inquirer
        .prompt([
            // All user details needed to generate a README file
            {
                type: "input",
                name: "title",
                message: "Please enter a title for your project."
            },
            {
                type: "input",
                name: "description",
                message: "Please enter a brief description of your project."
            },
            {
                type: "input",
                name: "installation",
                message: "Please enter installation instructions for your project."
            },
            {
                type: "input",
                name: "usage",
                message: "Please enter usage instructions for your project."
            },
            {
                type: "input",
                name: "contribution",
                message: "Please provide details on how others may contribute to your project."
            },
            {
                type: "input",
                name: "tests",
                message: "Please provide test instructions for your project, if any."
            },
            {
                type: "input",
                name: "github",
                message: "Please provide your GitHub username."
            },
            {
                type: "input",
                name: "email",
                message: "Please provide your email."
            },
            {
                type: "checkbox",
                name: "communication",
                message: "Please indicate your preferred method of communication. Select all that apply.",
                choices: ["GitHub", "Email", "Snail mail", "Morse code"]
            },
            {
                type: "checkbox",
                name: "licenses",
                message: "Please indicate which licenses apply to your project.",
                choices: ["MIT License", "GNU General Public License v3.0", "Apache License 2.0"]
            }
        ])
        .then((data) => {
            // Writing a README.md file and running the generateMarkdown function
            fs.writeFile("README.md", generateMarkdown(data), 
            (err) => 
            // Logging errors, if any, otherwise logging success
                err ? console.log(err) : console.log("Success!")
            );
        })
};

// Function call to initialize app
init();
