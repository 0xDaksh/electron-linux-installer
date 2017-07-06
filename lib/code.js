var deb = require('electron-installer-debian'),
    rpm = require('electron-installer-redhat'),
    c = require('chalk')
module.exports = (object) => {
    return new Promise((then, er) => {
        if(
            typeof object.src !== 'undefined' && 
            typeof object.dest !== 'undefined' &&
            typeof object.arch !== 'undefined' &&
            typeof object.for !== 'undefined'    
        ) {
            if(object.for.toLowerCase === 'both') {
                console.log(c.green('Building for Debian'))
                deb({
                    src: object.src,
                    dest: object.dest,
                    arch: object.arch
                }, (err) => {
                    er(err)
                })
                console.log(c.green('Building for Redhat'))
                rpm({
                    src: object.src,
                    dest: object.dest,
                    arch: object.arch
                }, (err) => {
                    er(err)
                })
            } else if (object.for.toLowerCase() === 'debian') {
                console.log(c.green('Building for Debian'))
                var arch = object.arch
                if(object.arch.toLowerCase() === 'x86_x64') {
                    arch = 'amd64'
                }
                deb({
                    src: object.src,
                    dest: object.dest,
                    arch: arch
                }, (err) => {
                    er(err)
                })
            } else if(object.for.toLowerCase() === 'redhat') {
                console.log(c.green('Building for Redhat'))
                rpm({
                    src: object.src,
                    dest: object.dest,
                    arch: object.arch
                }, (err) => {
                    er(err)
                })
            } else {
                er('Unknown Parameter ' + object.for + ' , Please Read the Docs.')
            }
             then('Completed Building The Installers.')
        } else {
            er('Please Provide the Correct Key:Value Pair')
        }
    })
}