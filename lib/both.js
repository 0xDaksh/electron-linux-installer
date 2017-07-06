var inq = require('inquirer'),
    ques = require('./pathQuestion'),
    chalk = require('chalk'),
    deb = require('electron-installer-debian'),
    rpm = require('electron-installer-redhat'),
    err = require('./sendErr')

module.exports = (cb) => {
    inq.prompt(ques).then((a) => {
        let options = {
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
        console.log(chalk.green('Building for Redhat'))
        rpm(options, (error) => {
            if(error) {
                err(error)
            }
        })
        cb()
    })
}