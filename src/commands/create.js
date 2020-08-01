const fse = require('fs-extra');
const path = require('path');
const { cwd } = require('../utils/env');
const execa = require('execa');
const validateProjectName = require('validate-npm-package-name');
const chalk = require('chalk');

function createCommand(program) {
  program
    .command('create <projectName>')
    .alias('c')
    .option('-a')
    .description('创建一个项目')
    .action((projectName, cmdObj) => {
      create(projectName).catch(error => {
        console.error(chalk.red('未知错误'));
        console.error(error);
      });
    });

  // program.on('--help', () => console.log(`  rookies create test-project`));
}

async function create(userInputName) {
  // 当用户输入的文件名为 . 时，表示在当前目录安装
  const inCurrent = userInputName === '.';
  const projectName = inCurrent ? path.relative('../', cwd) : userInputName;
  const projectPath = path.resolve(cwd, userInputName);

  // 验证项目名是否合规
  const result = validateProjectName(projectName);
  if (!result.validForNewPackages) {
    console.error(chalk.red(`😅 非法项目名: ${projectName}`));
    result.errors &&
      result.errors.forEach(error => {
        console.error(chalk.red.dim('Error: ' + error));
      });
    result.warnings &&
      result.warnings.forEach(warn => {
        console.error(chalk.red.dim('Warning: ' + warn));
      });
    process.exit(1);
  }

  // 1. 正常创建项目根目录
  if (!inCurrent) {
    try {
      await fse.mkdir(projectPath);
    } catch {
      console.error(chalk.red(`😅 当前路径存在相同项目名：${projectName}`));
      process.exit(1);
    }
  }

  // 2. 开始写入项目配置模板
  const files = [
    'config/.rookies.types.ts',
    'config/.rookiesrc.ts',
    'config/tsconfig-for-webpack-config.json',
    'config/webpack.config.dev.ts',
    'config/webpack.config.prod.ts',
    'config/webpack.config.ts',
    'public/.gitkeep',
    'src/components/MyTest/MyTest.tsx',
    'src/app.less',
    'src/app.tsx',
    'src/globals.d.ts',
    'src/index.html',
    '.babelrc.json',
    '.editorconfig',
    '.eslintignore',
    '.eslintrc.json',
    '.gitignore',
    '.prettierignore',
    '.prettierrc',
    'package.json',
    'README.md',
    'tsconfig.json'
  ];
  const filesCount = files.length;
  console.log(chalk.green(`🧐 开始写入模板，共计${filesCount}个文件...\n`));
  console.log(chalk.green(`😎 模板写入成功...\n`));
  try {
    await Promise.all(files.map(filePath => writeFile(projectPath, filePath)));
  } catch (error) {
    console.error(chalk.red('😅 文件写入异常'));
    console.error(error);
    process.exit(1);
  }

  // 3. 执行 npm install
  console.log(chalk.green(`🧐 安装依赖...\n`));
  /**
   * NOTE: 显示子进程依赖安装过程
   * stdio: ['inherit', 'inherit', 'inherit'],
   * 抄的vue-cli，必须写三个，暂不清楚为什么
   * inherit 会让子进程继承主进程的 stdin stdout stderr
   * # http://nodejs.cn/api/child_process.html#child_process_options_stdio
   */
  await execa('npm', ['install', '--loglevel', 'error'], {
    cwd: projectPath,
    stdio: ['inherit', 'inherit', 'inherit'],
  });
  console.log(chalk.green('😎 项目安装完毕，尝试启动服务吧！\n'));
  console.log(chalk.green(`       npm run dev`));
  console.log(chalk.green(`       yarn dev`));
  console.log(chalk.green('\n🥳 see you again!'));
}

async function writeFile(projectPath, filePath) {
  const _path = path.join(projectPath, filePath);
  const tempData = require(`../template/${filePath}.temp`)();
  return fse.outputFile(_path, tempData);
}

module.exports = createCommand;
