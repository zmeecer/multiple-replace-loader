# multiple-replace-loader
A simple Webpack loader that applies regular expression replacement to a file

Sample config usage the replacement:

```javascript
  var appPackage = require('./package.json');
  ...
  modules: {
    loaders: [
      {
        test: /\.(html|xml)$/,
        loaders: [
          'file?name=[name].[ext]', 'multiple-replace?' +
          'META_NAME=' + appPackage.name +
          '&META_DESCRIPTION=' + appPackage.description
        ]
      },
  ...
```

```javascript
  ...
  modules: {
    loaders: [
      {
        test: /\.(html|xml)$/,
        loaders: [
          'file',
          'multiple-replace?TOKEN=2g43m16a'
        ]
      },
  ...
```

Options
* key (like META_NAME) - The regular expression or special label.
* value - replacement text, for example, from package.json
