
const fs = require('fs');

const currentPath = __dirname;
const ignoreFileNames = ['index.js', 'README.md'];

function initCommands(program) {
  // 遍历当前文件夹，自动加载所有命令
  fs.readdirSync(currentPath).forEach(fileName => {
    // 当前文件为自身跳过
    if (ignoreFileNames.includes(fileName)) {
      return;
    }

    const commandFunc = require(`./${fileName}`);
    commandFunc(program);
  });
}

module.exports = initCommands;
