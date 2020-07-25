const temp = `# npm or yarn
/node_modules
/yarn.lock
/package-lock.json

# systom
/.Ds_Store

# editor
.vscode

# dist
/dist
/build`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
