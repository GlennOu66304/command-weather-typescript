const commander = require('commander');

commander
    .version("0.1.0")
    .option("-p, --peppers", "Add peppers")
    .option("-P, --pineapple", "Add pineapple")
    .option("-b, --bbq-sauce", "Add bbq sauce")
    .option("-c, --cheese [type]", "Add the specified type of cheese [marblel", "marble")
// [ts] Cannot find name 'process'.
    .parse(process.argv);