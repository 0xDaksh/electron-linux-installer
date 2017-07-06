module.exports = [{
    name: 'both',
    type: 'input',
    message: 'Do you want to Make the Installer for Both Debian and Redhat',
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
            return 'Please Enter Yes or No'
        } 
    }
}]