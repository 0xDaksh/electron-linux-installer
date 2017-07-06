var inq = require('inquirer'),
    ques = require('./pathQuestion'),
    err = require('./sendErr'),
    deb = require('electron-installer-debian')

inq.prompt(ques).then((a) => {
    var options = {
        src: a.getSource,
        dest: a.getDestination,
        arch: a.getArch
    }
    console.log(chalk.green('Building for Debian'))
    deb(options, (error) => {
        if(error) {
            err(error)
        }
    })
    console.log('Build Complete for Debian')
})