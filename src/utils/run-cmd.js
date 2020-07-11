const childProcess = require('child_process');

const runCmd = cmd => {
  return new Promise((resolve, reject) => {
    childProcess.exec(cmd, (error, stdout, stderr) =>
      error ? reject(error) : resolve({ stdout, stderr }),
    );
  });
};

module.exports = {
  runCmd,
};
