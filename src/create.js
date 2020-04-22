const inquirer = require('inquirer');
const {
  fnLoadingByOra,
  fetchRepoLists,
  getTagLists,
  downDir,
  copyTempToLocalhost,
} = require('./utils/common');
const path = require('path');

async function create(projectName) {
  let repos = await fnLoadingByOra(fetchRepoLists, '正在连接你的仓库...')();
  repos = repos.map(item => item.name);

  const { repo } = await inquirer.prompt([
    { type: 'list', name: 'repo', message: '请选择一个你要创建的项目', choices: repos },
  ]);

  let tags = await fnLoadingByOra(getTagLists, `正在连接你的选择的仓库${repo}的Tag...`)(repo);
  tags = tags.map(item => item.name);

  const { tag } = await inquirer.prompt([
    { type: 'list', name: 'tag', message: '请选择一个该项目的版本下载', choices: tags },
  ]);

  const file = await fnLoadingByOra(downDir, `下载项目${repo}#${tag}...`)(repo, tag);
  console.log();
  console.log(file);
  copyTempToLocalhost(file, projectName);

  console.log(`我们准备创建的项目是：${projectName}`);
}

module.exports = create;
