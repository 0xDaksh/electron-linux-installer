module.exports = [{
    name: 'getSource',
    type: 'input',
    message: 'Please Enter the Source Path',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Path of your Source Code.'
        }
    }
}, 
{
    name: 'getDestination',
    type: 'input',
    message: 'Please Enter the Destination Path',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Path of your Destination for Installer Output.'
        }
    }
},
{
    name: 'getArch',
    type: 'input',
    message: 'Please Enter the Architecture Name',
    validate: (v) => {
        if(v.length) {
            return true
        } else {
            return 'Please Enter the Name of the Architecture.'
        }
    }
}]