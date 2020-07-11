const path = require('path');
const program = require('commander');
const initCommands = require('./commands');
const { version } = require('./utils/env');

function main() {
  program.on('--help', () => console.log('\nExample:'));

  // 初始化命令
  initCommands(program);
  
  program.version(version).parse(process.argv); // process.argv 用户在命令行中传入的参数
}

main();
