'use strict';

const staticI18n = require('static-i18n');

class StaticI18nHtmlPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compile.tap('StaticI18nHtmlPlugin', (stats) => {
      staticI18n.processDir(this.options.baseDir, this.options, (err, result) => {
        if (err) {
          stats.compilation.errors.push(err);
        }
        console.log("StaticI18nHtmlPlugin finished without errors.")
      });
    });
  }
}

module.exports = StaticI18nHtmlPlugin;
