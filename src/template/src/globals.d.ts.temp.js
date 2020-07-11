const temp = `declare module '*.css';
declare module '*.less';
declare module '*.png';
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
