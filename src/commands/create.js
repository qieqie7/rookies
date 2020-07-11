const fs = require('fs');
const path = require('path');
const { cwd } = require('../utils/env');

async function create(projectName) {
  projectName = 'my_test';
  const projectPath = path.join(cwd, projectName);
  try {
    // 正常创建
    await new Promise((resolve, reject) =>
      fs.mkdir(projectPath, error => (error ? reject(error) : resolve())),
    );

    // 开始写入项目配置模板
    await new Promise((resolve, reject) =>
      fs.writeFile(
        path.join(projectPath, 'README.md'),
        require('../template/README.md.temp')(),
        error => (error ? reject(error) : resolve()),
      ),
    );
  } catch {
    // 文件存在
    console.log('当前路径文件存在');
  }
}

function createCommand(program) {
  program
    .command('create <projectName>')
    .alias('c')
    .description('创建一个项目')
    .option('-d, --debug <type>', 'output extra debugging')
    .action((projectName, cmdObj) => create(projectName));
}

module.exports = createCommand;
