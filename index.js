const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const template = require('./src/template')

var allEmployees = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'teamManager',
            message: 'Enter team managers name'
        },
        {
            type: 'input',
            name: 'teamManagerID',
            message: 'Enter team managers employee Id'
        },
        {
            type: 'input',
            name: 'teamManagerEmail',
            message: 'Enter team managers Email'
        },
        {
            type: 'input',
            name: 'teamManagerOfNum',
            message: 'Enter team managers office number'
        },

    ])
    .then((answers) => {
        console.log(answers);
        //generateManager(Manager)
        let manager = new Manager(answers.teamManager, answers.teamManagerID, answers.teamManagerEmail, answers.teamManagerOfNum)
        allEmployees.push(manager)
        menuChoices();
    })

function menuChoices() {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'menu',
                message: 'what would you like to do?',
                choices: ['Add Engineer', 'Add Intern', 'Finish Making Team'],
            },
        ])
        .then((answers) => {
            if (answers.menu === 'Add Engineer') {
                addEngineer()
            }
            if (answers.menu === 'Add Intern') {
                addIntern()
            }
            if (answers.menu === 'Finish Making Team') {

                done();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Engineer',
                message: 'Enter Engineer name'
            },
            {
                type: 'input',
                name: 'EngineerID',
                message: 'Enter Engineer employee Id'
            },
            {
                type: 'input',
                name: 'EngineerEmail',
                message: 'Enter Engineer Email'
            },
            {
                type: 'input',
                name: 'Github',
                message: 'Enter Engineers github account'
            }
        ]).then((answers) => {
            let engineer = new Engineer(answers.Engineer, answers.EngineerID, answers.EngineerEmail, answers.Github)
            allEmployees.push(engineer)
            menuChoices();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Intern',
                message: 'Enter Intern name'
            },
            {
                type: 'input',
                name: 'InternID',
                message: 'Enter Intern employee Id'
            },
            {
                type: 'input',
                name: 'InternEmail',
                message: 'Enter Intern Email'
            },
            {
                type: 'input',
                name: 'School',
                message: 'Enter interns school'
            }
        ]).then((answers) => {
            let intern = new Intern(answers.Intern, answers.InternID, answers.InternEmail, answers.School)
            allEmployees.push(intern)
            menuChoices();
        })
}

var DIST_DIR = path.resolve(__dirname, "dist")
var distPath = path.join(DIST_DIR, "team.html")

function done() {
    console.log(allEmployees);
    fs.writeFileSync(distPath, template(allEmployees), "utf-8")
}


