const chalk = require('chalk');
const greet = require('./greet');
var figlet = require('figlet');

figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something appears to have gone quite wrong...');
        console.log((err));
        return;
    }
    console.log(chalk.green(data));
})