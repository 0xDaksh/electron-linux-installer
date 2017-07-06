var chalk = require('chalk')
module.exports = (err) => {
    console.log(chalk.red(err, err.stack))
    throw chalk.red('Exciting due to Error.')
}