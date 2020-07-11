const path = require('path');
const { name, version } = require('../../package.json');

// const runTimeAbsolutePath = `${
//   process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']
// }`;

const cwd = process.cwd();

module.exports = {
  cwd,
  name,
  version,
};
