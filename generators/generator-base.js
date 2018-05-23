const chalk = require('chalk');
const PrivateBase = require('./generator-base-private');

module.exports = class extends PrivateBase {
    /**
     * Print an error message.
     *
     * @param {string} msg - message to print
     */
    error(msg) {
        this.env.error(`${chalk.red.bold('ERROR!')} ${msg}`);
    }

    /**
     * Print a warning message.
     *
     * @param {string} msg - message to print
     */
    warning(msg) {
        this.log(`${chalk.yellow.bold('WARNING!')} ${msg}`);
    }

    /**
     * Print an info message.
     *
     * @param {string} msg - message to print
     */
    info(msg) {
        this.log.info(msg);
    }

    /**
     * Print a success message.
     *
     * @param {string} msg - message to print
     */
    success(msg) {
        this.log.ok(msg);
    }

    /**
     * Prints a RSB logo.
     */
    printRSBLogo() {
        this.log('\n');
        this.log(chalk.red('    ____  _____ ____      __             '));
        this.log(chalk.red('   / __ \\/ ___// __ )____/ /__ _   __    '));
        this.log(chalk.red('  / /_/ /\\__ \\/ __  / __  / _ \\ | / /    '));
        this.log(chalk.red(' / _, _/___/ / /_/ / /_/ /  __/ |/ /     '));
        this.log(chalk.red('/_/ |_|/____/_____/\\__,_/\\___/|___/      '));
        this.log(chalk.white('Bem vindo ao gerador de código da RSBdev'));
        this.log(chalk.white.bold('https://www.rsbdev.com.br'));
        this.log(chalk.green(' _______________________________________________________________________________________________________________\n'));
    }

    /**
     * get the java main class name.
     * @param {string} baseName of application
     */
    getMainClassName(baseName) {
        return `${baseName.charAt(0).toUpperCase() + baseName.slice(1)}Application`;
    }
};
