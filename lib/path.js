module.exports = [{
    name: 'src',
    type: 'input',
    message: 'Enter the Path of Source Code',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Path of Your Source Code'
        } 
    }
},
{
    name: 'dest',
    type: 'input',
    message: 'Enter the Path of the Destination for your Installer',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Path of the Destination for your Installer'
        } 
    }
},
{
    name: 'arch',
    type: 'input',
    message: 'Enter the Name of the Architecture you are building for',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Name of the Architecture you are building for'
        } 
    }
}]