/*jslint indent: 2, eqeqeq: false, onevar: false*/
Date.prototype.strftime = (function () {
  function strftime(format) {
    var date = this;

    return (format + "").replace(/%([a-zA-Z])/g, function (m, f) {
      var formatter = Date.formats && Date.formats[f];

        //single formatter ('%d')
      if (typeof formatter == "function") {
        return formatter.call({}, date);

      //format shorthands ('%Y-%m-%d')
      } else if (typeof formatter == "string") {
        return date.strftime(formatter);
      }

      return f;
    });
  }

  // Internal helper
  /*
  function zeroPad(num) {
    return (+num < 10 ? "0" : "") + num;
  }
  */

  Date.formats = {
    // Formatting methods
    d: function (date) {
      return date.getDate();
    },

    m: function (date) {
      return date.getMonth() + 1;
    },

    y: function (date) {
      return date.getYear() % 100;
    },

    Y: function (date) {
      return date.getFullYear();
    },

    // Format shorthands
    F: "%Y-%m-%d",
    D: "%m/%d/%y"
  };

  return strftime;
}());
