const path = require('path');
const program = require('commander');
const { version } = require('./utils/constants');
const { mapActions } = require('./utils/common');

Reflect.ownKeys(mapActions).forEach(action => {
  const { alias, description } = mapActions[action];
  program
    .command(action)
    .alias(alias)
    .description(description)
    .action(() => {
      if (action === '*') {
        console.log(description);
      } else {
        console.log(process.argv);
        console.log('action: ', action);
        const method = require(path.join(__dirname, action));
        // 前面三个 [node, hola, create, ...其他参数]
        method(...process.argv.slice(3));
      }
    });
});

program.on('--help', () => {
  console.log('\nExample:');
  Reflect.ownKeys(mapActions).forEach(action => {
    mapActions[action].examples.forEach(example => {
      console.log(`  ${example}`);
    });
  });
});

program.version(version).parse(process.argv); // process.argv 用户在命令行中传入的参数
