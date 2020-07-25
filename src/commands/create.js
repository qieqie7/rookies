const fse = require('fs-extra');
const path = require('path');
const { cwd } = require('../utils/env');
const { runCmd } = require('../utils/run-cmd');

async function writeFile(filePath, projectPath) {
  const _path = path.join(projectPath, filePath);
  const tempData = require(`../template/${filePath}.temp`)();
  await fse.outputFile(_path, tempData);
  return;
}

async function create(projectName) {
  const projectPath = path.join(cwd, projectName);
  try {
    // 1. 正常创建项目根目录
    await fse.mkdir(projectPath);

    // 2. 开始写入项目配置模板
    try {
      const files = [
        'config/.hola.types.ts',
        'config/.holarc.ts',
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
      ];
      const filesCount = files.length;
      console.log(`开始写入模板，共计${filesCount}个文件`);
      let writeSuccessCount = 0;
      await Promise.all(
        files.map(filePath =>
          (async () => {
            await writeFile(filePath, projectPath);
            writeSuccessCount += 1;
            console.log(`完成 ${writeSuccessCount}/${filesCount}`);
          })(),
        ),
      );
    } catch (error) {
      console.log('写入项目模板出错了...抱歉...')
      console.log(error);
      process.exit(1);
    }

    // 3. 执行 npm install
    await runCmd(`cd ${projectPath} && npm i`);

    console.log(`项目安装完毕，npm run dev`);
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
    .action((projectName, cmdObj) => create(projectName));

  // program.on('--help', () => console.log(`  hola create test-project`));
}

module.exports = createCommand;
