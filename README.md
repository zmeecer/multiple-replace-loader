# multiple-replace-loader
A simple Webpack loader that applies regular expression replacement to a file

Sample config usage the replacement:

```javascript
  ...
  modules: {
    loaders: [
      {
        test: /\.(html|xml)$/,
        loaders: [
          'file?name=[name].[ext]', 'multiple-replace?' +
          'META_NAME=' + appPackage.appName +
          '&META_DESCRIPTION=' + appPackage.description
        ]
      },
    ]
  ...
```

Options
* key (like META_NAME) - The regular expression or special label. * value - replacement text, for example, from package.json
