import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

require('babel-register')({
  presets: ['env'],
});

const app = express();

function htmlTemplate(reactDom) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
        </body>
        </html>
    `;
}

app.get('/*', (req, res) => {
  const jsx = (<App />);
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});
const PORT = process.env.PORT || 2048;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});
