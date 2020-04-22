const path = require('path');
const { name, version } = require('../../package.json');

// const downloadDirectory = `${
//   process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']
// }/.myTemplate`;

const downloadDirectory = path.resolve(__dirname, '../../myTemplate');

module.exports = {
  downloadDirectory,
  name,
  version,
};
