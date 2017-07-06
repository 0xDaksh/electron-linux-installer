var chalk = require('chalk')
module.exports = (err) => {
    console.log(chalk.red(err, err.stack))
    throw chalk.red('Exiting due to error and failure.')
}