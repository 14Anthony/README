const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What should we name your project?',
            }
                .then(answers => {
                    console.log('Answer:', answers.title);
                })
        ])
        .prompt([
            {
                type: 'editor',
                name: 'description',
                message: 'In detail as the editor opens give a description of your project',

            }
                .then(answers => {
                    console.log('Answer: ', answers.description);
                })
        ])
        .prompt([
            {
                type: 'checkbox',
                name: 'tableOfContents',
                message: ' Which of the following would you like included in your table of contents',
                choices: [
                    'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions',
                ],
            }
                .then(answers => {
                    console.log('Answer:  ', answers.tableOfContents);
                })
        ])
        .prompt([
            {
                type: 'editor',
                name: 'usage',
                message: ' What is the appropriate usage for this project',
            }
                .then(answers => {
                    console.log('Answer:  ', answers.usage);
                })
        ])
        .prompt([
            {
                type: 'checkbox',
                name: 'license',
                message: 'Please check with license is associated with your project.',
                choices: [
                    'MIT', 'Apache', 'other',
                ],
            }
                .then(answers => {
                    console.log('Answer:  ', answers.license);

                })
        ])
        .prompt([
            {
                type: 'input',
                name: 'contributing',
                message: 'Who where the contributing parties',
            }
                .then(answers => {
                    console.log('Answer:', answers.contributing);
                })
        ])
        .prompt([
            {
                type: 'input',
                name: 'tests',
                message: 'What testing was implemented?',
            }
                .then(answers => {
                    console.log('Answer:', answers.testing);
                })
        ])
        .prompt([
            {
                type: 'input',
                name: 'questions',
                message: 'What questions remain?',
            }
                .then(answers => {
                    console.log('Answer:', answers.questions);
                })
        ])
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
