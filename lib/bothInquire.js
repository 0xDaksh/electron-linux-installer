var inq = require('inquirer'),
    chalk = require('chalk'),
    q = require('./bothQuestions'),
    p = require('./path'),
    error = require('./sendErr'),
    deb = require('electron-installer-debian'),
    rpm = require('electron-installer-redhat'),
    d = require('./debian'),
    r = require('./rpm')

module.exports = () => {
    inq.prompt(q).then((a) => {
        if(a.both.toLowerCase().indexOf('yes') !== -1 || a.both.toLowerCase() === 'y') {
            inq.prompt(p).then((a) => {
                let options = {
                    src: a.src,
                    dest: a.dest,
                    arch: a.arch
                }
                console.log(chalk.green('Starting to Build for Debian'))
                deb(options, (err) => {
                    if(err) {
                        error(err)
                    }
                })
                console.log(chalk.green('Starting to Build for Redhat'))
                rpm(options, (err) => {
                    if(err) {
                        error(err)
                    }
                })
                console.log(chalk.green('Build for Both Complete.'))
            })
        } else {
            d(() => {
                r()
            })
        }
    })
}