const temp = `import { rookiesConfiguration } from './.rookies.types';

const rookiesConfig: rookiesConfiguration = {};

export default rookiesConfig;
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
