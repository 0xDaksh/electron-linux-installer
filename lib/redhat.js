var inq = require('inquirer'),
    ques = require('./pathQuestion'),
    err = require('./sendErr'),
    rpm = require('electron-installer-redhat')

inq.prompt(ques).then((a) => {
    var options = {
        src: a.getSource,
        dest: a.getDestination,
        arch: a.getArch
    }
    console.log(chalk.green('Building for Redhat'))
    rpm(options, (error) => {
        if(error) {
            err(error)
        }
    })
    console.log(chalk.green('Build Complete for Redhat'))
})