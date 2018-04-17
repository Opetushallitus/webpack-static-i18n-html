import { basename, dirname, join } from 'path';
import webpack from 'webpack';
import StaticI18nHtmlPlugin from '../index';

export default function processTemplates(...pluginOpts) {
  const compiler = webpack({
    entry: join(__dirname, 'index.js'),
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new StaticI18nHtmlPlugin(...pluginOpts),
    ],
  });

  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
