var inquirer = require('inquirer')
module.exports = (cb) => {
    var question = [{
        name: 'both',
        type: 'input',
        message: 'Do you want to build for both Debian and Redhat?',
        validate: (val) => {
            if(val.length && 
               val.toLowerCase().indexOf('yes') !== -1 ||
               val.toLowerCase().indexOf('no') !== -1 ||
               val.toLowerCase().indexOf('y') !== -1 ||
               val.toLowerCase().indexOf('n') !== -1
               ) {
                return true
            } else {
                return 'Please answer with yes or no.'
            }
        }
    }]
    inquirer.prompt(question).then(cb)
}