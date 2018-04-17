# webpack-static-i18n-html
A webpack plugin for generating internationalized HTML files.  
Inspired by [gulp-static-i18n-html](https://github.com/36web/gulp-static-i18n-html) which offers the same functionality for gulp.

## Installation

```sh
$ npm install --save-dev git+ssh://git@github.com/Opetushallitus/webpack-static-i18n-html.git
```

## Usage

webpack.config.js

```javascript
{
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new StaticI18nHtmlPlugin({
            locale: 'fi',
            locales: ['fi', 'sv', 'en'],
            baseDir: __dirname,
            outputDir: join(__dirname, 'html/'),
            outputDefault: '__lng__/__file__',
            localesPath: join(__dirname, 'locales/'),
            files: 'templates/*.html'
        })
    ]
}
```

See [node-static-i18n](https://github.com/claudetech/node-static-i18n) documentation for more information.
