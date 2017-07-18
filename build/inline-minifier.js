var fs = require('fs');
var path = require('path');
var UglifyJS = require('uglify-es');

exports.getMinified = function getMinified(file) {
  var code = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  var result = UglifyJS.minify(code);
  if (result.error) return '';
  return result.code;
}
