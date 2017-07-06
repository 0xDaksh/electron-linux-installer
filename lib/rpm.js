var rpm = require('electron-installer-redhat'),
    chalk = require('chalk'),
    error = require('./sendErr'),
    p = require('./path'),
    inq = require('inquirer')

module.exports = (cb) => {
    inq.prompt([{
     name: 'rpm',
     type: 'input',
     message: 'Would you like to build for Redhat?',
     validate: (v) => {
         if(
            v.length && 
            v.toLowerCase().indexOf('yes') !== -1 ||
            v.toLowerCase().indexOf('y') !== -1 ||
            v.toLowerCase().indexOf('no') !== -1 ||
            v.toLowerCase().indexOf('n') !== -1
         ) {
            return true
         } else {
             return 'Please Enter a yes or a no'
         }
     }   
    }]).then((a) => {
        let d = a.rpm.toLowerCase()
        if(d.indexOf('yes') !== -1 || d.indexOf('y') !== -1) {
            inq.prompt(p).then((a) => {
                if(a.arch.toLowerCase() === 'amd64') {
                    a.arch = 'x86_x64'
                }
                let options = {
                    src: a.src,
                    dest: a.dest,
                    arch: a.arch
                }
                console.log(chalk.green('Starting to Build for Redhat'))
                rpm(options, (err) => {
                    if(err) {
                        error(err)
                    }
                    console.log(chalk.green('Build for Both Complete. You can find the Installer at ' + a.dest))
                })
            })
        } else {
            console.log(chalk.red('Thank you for using the Service.'))
        }
    })
}