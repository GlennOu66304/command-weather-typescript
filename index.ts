const { program } = require('commander');

program
    .version("0.1.0")
    .option("-p, --peppers", "Add peppers")
    .option("-P, --pineapple", "Add pineapple")
    .option("-b, --bbq-sauce", "Add bbq sauce")
    .option("-c, --cheese [type]", "Add the specified type of cheese [marble]", "marble");
    // .outputHelp();
program.parse();

const options = program.opts();
// console.log(options)

