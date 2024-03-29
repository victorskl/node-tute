let logger = {
  info: function (info) {
    console.log('Info: ' + info);
  },
  warning: function (warning) {
    console.log('Warning: ' + warning);
  },
  error: function (error) {
    console.log('Error: ' + error);
  }
};

module.exports = logger; // ES5
