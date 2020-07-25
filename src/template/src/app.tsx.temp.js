const temp = `import React from 'react';
import ReactDom from 'react-dom';
import style from './app.less';
import MyTest from '@/components/MyTest/MyTest';

const root = document.getElementById('root');

const App = () => (
  <div className={style.welcomeWrap}>
    <MyTest />
  </div>
);

ReactDom.render(<App />, root);`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
