const temp = `import { rookieConfiguration } from './.rookie.types';

const rookieConfig: rookieConfiguration = {};

export default rookieConfig;
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
