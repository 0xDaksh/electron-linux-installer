var deb = require('electron-installer-debian'),
    chalk = require('chalk'),
    error = require('./sendErr'),
    p = require('./path'),
    inq = require('inquirer')

module.exports = (cb) => {
    inq.prompt([{
     name: 'deb',
     type: 'input',
     message: 'Would you like to build for Debian?',
     validate: (v) => {
         if(
            v.length && 
            v.toLowerCase().indexOf('yes') !== -1 ||
            v.toLowerCase().indexOf('y') === 'y' ||
            v.toLowerCase().indexOf('no') !== -1 ||
            v.toLowerCase() === 'n'
         ) {
            return true
         } else {
             return 'Please Enter a yes or a no'
         }
     }   
    }]).then((a) => {
        let d = a.deb.toLowerCase()
        if(d.indexOf('yes') !== -1 || d === 'y') {
            inq.prompt(p).then((a) => {
                let arch = a.arch
                if(arch.toLowerCase() === 'x86_x64') {
                    arch = 'amd64'
                }
                let options = {
                    src: a.src,
                    dest: a.dest,
                    arch: arch
                }
                console.log(chalk.green('Starting to Build for Debian'))
                deb(options, (err) => {
                    if(err) {
                        error(err)
                    }
                    console.log(chalk.green('Build for Both Complete. You can find the Installer at ' + a.dest))
                })
            })
        } else {
            cb()
        }
    })
}