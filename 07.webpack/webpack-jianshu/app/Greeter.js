const config = require('./package.json');


module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};
