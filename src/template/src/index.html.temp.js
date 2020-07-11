const temp = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root">
      <noscript>enable javascript please or update browser</noscript>
    </div>
  </body>
</html>
`;

function generateTemp() {
  return temp;
}

module.exports = generateTemp;
