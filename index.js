const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [
    // RD:  I must create a question that lies within the array
    {
        type: 'input',
        name: 'title',
        message: 'What should we name your project?',
    },
    // RD:  I must create a question that lies within the array by using editor it allows people to enter in more text, by opening notepad

    {
        type: 'editor',
        name: 'description',
        message: 'In detail as the editor opens give a description of your project',

    },
    // RD:  I must create a question that lies within the array

    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: ' Which of the following would you like included in your table of contents',
        choices: [
            'Installation', 'Usage', 'License', 'Contributor', 'Tests', 'Questions',
        ],

        //RD:  Here I am creating a function that will make sure that atleast on choice is chosen with an if statement.        
        // validate: function (answer) {
        //     if (answer.length < 1) {
        //         return ('Your table of contents must have atleast one content')
        //     }
        // }
    },

    // RD:  I must create a question that lies within the array by using editor it allows people to enter in more text, by opening notepad

    {
        type: 'editor',
        name: 'usage',
        message: ' What is the appropriate usage for this project',
    },

    // RD:  I must create a question that lies within the array

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please check with license is associated with your project.',
        choices: [
            { name: 'MIT' },
            { name: 'Apache' },
            { name: 'GPL' },
            { name: 'other' }
        ],
        //RD:  Here I am creating a function that will make sure that atleast on choice is chosen with an if statement.       
        // validate: function (answer) {
        //     if (answer.length < 1) {
        //         return ('You must be licensed')
        //     }
        // }
    },

    // RD:  I must create a question that lies within the array

    {
        type: 'input',
        name: 'contributor',
        message: 'Please list each contributor separated by a comma',
        when: function (answers) {
            return answers.contributors;
        },

    },
    // RD:  I must create a question that lies within the array
    {
        type: 'input',
        name: 'tests',
        message: 'What testing was implemented?',
    },

    // RD:  I must create a question that lies within the array

    {
        type: 'input',
        name: 'questions',
        message: 'What questions remain?  Please enter email address, and comma seperate your github username.',
    },

];


// function to write README file
function writeToFile(fileName, answers) {
    fs.appendFile(fileName,
        `# ${answers.title}` +
        '\n' +
        '\n' +
        `# ${answers.description}` +
        '\n' +
        '\n' +
        `# ${answers.tableOfContents}` +
        '\n' +
        '\n' +
        `# ${answers.usage}` +
        '\n' +
        '\n' +
        `# ${answers.license}` +
        '\n' +
        '\n' +
        `# ${answers.contributor}` +
        '\n' +
        '\n' +
        `# ${answers.tests}` +
        '\n' +
        '\n' +
        `# ${answers.questions}`,
        function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Commit logged!");
            }
        });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            generateMarkdown(answers);
            const fileName = `${answers.title}` + '.md'
            writeToFile(fileName, answers);


            console.log(answers.tests)
            console.log(answers);
            generateMarkdown();
            console.log(fileName);
            writeToFile(fileName, answers);

        })
        .catch(error => {
            if (error.isTtyError) {

            } else {

            }

        });
};

// function call to initialize program
init();
