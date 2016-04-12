'use strict';
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  if (this.cacheable) { this.cacheable(); }

  var query = loaderUtils.parseQuery(this.query);
  if (typeof query === "object") {
    var regex;
    Object.keys(query).forEach(function(key) {
      regex = new RegExp(key, 'g');
      content = content.replace(regex, query[key]);
    });
  }

  return content;
};
