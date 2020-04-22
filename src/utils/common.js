const ora = require('ora');
const util = require('util');
const axios = require('axios');
const downloadGit = util.promisify(require('download-git-repo'));
const fs = require('fs');
const fse = require('fse');
const MetalSmith = require('metalsmith');
const path = require('path');
const ncp = require('ncp')
const { downloadDirectory } = require('./constants');

const fnLoadingByOra = (fn, message) => async (...argv) => {
  const spinner = ora(message);
  spinner.start();
  const result = await fn(...argv);
  spinner.succeed();
  return result;
};

const fetchRepoLists = async () => {
  const { data } = await axios.get('https://api.github.com/orgs/lxy-cli/repos');
  return data;
};

const getTagLists = async repo => {
  const { data } = await axios.get(`https://api.github.com/repos/lxy-cli/${repo}/tags`);
  return data;
};

const mapActions = {
  create: {
    alias: 'c', // 别名
    description: '创建一个项目',
    examples: ['hola create <project-name>'],
  },
  // config: {
  //   alias: 'conf',
  //   description: 'config project variable',
  //   examples: ['hola config set <k> <v>', 'hola config get <k>'],
  // },
  '*': {
    alias: '',
    description: 'command not found',
    examples: [],
  },
};

const downDir = async (repo, tag) => {
  let project = `lxy-cli/${repo}`; //下载的项目
  if (tag) {
    project += `#${tag}`;
  }
  let dest = `${downloadDirectory}/${repo}`;
  try {
    await downloadGit(project, dest);
  } catch (error) {
    console.log('错误了吗？？？\n');
    console.log(error);
  }
  return dest;
};

const copyTempToLocalhost = async (target, projectName) => {
  const resolvePath = path.join(path.resolve(), projectName);
  await ncp(target, resolvePath);
};

module.exports = {
  mapActions,
  fnLoadingByOra,
  getTagLists,
  fetchRepoLists,
  downDir,
  copyTempToLocalhost,
};
