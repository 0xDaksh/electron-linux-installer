var chalk = require('chalk'),
 clear = require('clear'),
 CLI = require('clui'),
 figlet = require('figlet'),
 Preferences = require('preferences'),
 Spinner = CLI.Spinner,
 inq = require('inquirer'),
 fs = require('fs'),
 ques = require('./first'),
 both = require('./both')

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Linux Builder', { horizontalLayout: 'full' })
  )
);

ques((a) => {
    if(a.both.toLowerCase().indexOf('yes') !== -1 || a.both.toLowerCase().indexOf('y') !== -1) {
        both((a) => {
          
        })
    } else {

    }
})