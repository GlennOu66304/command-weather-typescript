const commander = require('commander');

const command = commander
    .version("0.1.0")
    .option("-c, --city", "Add city name")
    .parse(process.argv);

// const options = program.opts();
// const limit = options.first ? 1 : "undefined"
console.log(command.city)