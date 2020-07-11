const temp = `body {
  background: #eee;
}
.welcomeWrap {
  margin: 200px auto 0;
  width: 500px;
  text-align: center;
  & > h1 {
    color: lightcoral;
  }
}
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
