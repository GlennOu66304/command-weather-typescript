
const { program } = require('commander');
var colors = require('colors');

program
  .version("0.1.0")
  .option("-c, --city [name]", "Add city name")
  .outputHelp(colors.red)
program.parse();
const options = program.opts();
console.log(options.city)
