const temp = `import { HolaConfiguration } from './.hola.types';

const holaConfig: HolaConfiguration = {};

export default holaConfig;
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
