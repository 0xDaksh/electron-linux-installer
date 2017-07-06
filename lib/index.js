var chalk = require('chalk'),
    clear = require('clear'),
    cli = require('clui'),
    figlet = require('figlet'),
    spinner = cli.Spinner,
    both = require('./bothInquire')

clear()
console.log(
    chalk.yellow(
        figlet.textSync('Linux-Builder')
    )
)
both()