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
                var debArch, rArch = a.arch
                if(a.arch === 'amd64') {
                     debArch = 'amd64'
                     rArch = 'x86_x64'
                }
                console.log(chalk.green('Starting to Build for Debian'))
                deb({
                    src: a.src,
                    dest: a.dest,
                    arch: debArch
                }, (err) => {
                    if(err) {
                        error(err)
                    }
                    console.log(chalk.green('Build for Debian Completed'))
                    console.log(chalk.green('Starting to Build for Redhat'))
                })
                rpm({
                    src: a.src,
                    dest: a.dest,
                    arch: rArch    
                }, (err) => {
                    if(err) {
                        error(err)
                    }
                    console.log('Build for Redhat Completed')
                    console.log(chalk.green('Build for Both Complete. You can find the Installer at' + a.dest))
                })
            })
        } else {
            d(() => {
                r()
            })
        }
    })
}