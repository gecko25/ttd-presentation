/*jslint indent: 2*/
/*globals assert, testCase*/

/*Part one
var date = new Date(1989, 0, 25);
console.log('%Y:' + date.strftime('%Y'));
console.log('%m:' + date.strftime('%m'));
console.log('%d:' + date.strftime('%d'));
console.log('%y:' + date.strftime('%y'));
console.log('%F:' + date.strftime('%F'));
*/

/*Part Two
var date = new Date(1989, 0, 25);
try{
  assert("%Y should return full year",
         date.strftime("%Y") === "1989");

  assert("%m should return month",
        date.strftime("%m") === "01");

  assert("%d should return date",
         date.strftime("%d") === "25");

  assert("%y should return year as two digits",
      date.strftime("%y") === "89");

  assert("%F should be shortcut for %Y-%m-%d",
         date.strftime("%F") === "%Y-%m-%d");
}catch(e){
  console.log("Test failed:" + e.message)
}
*/



/*Part Three
var date = new Date(1989, 0, 25);
testCase("strftime test", {
  "test format specifier %Y": function () {
    assert("%Y should return full year",
           Date.formats.Y(date) === 1989);
  },

  "test format specifier %m": function () {
    assert("%m should return month",
           Date.formats.m(date) === "01");
  },

  "test format specifier %d": function () {
    assert("%d should return date",
           Date.formats.d(date) === "25");
  },

  "test format specifier %y": function () {
    assert("%y should return year as two digits",
           Date.formats.y(date) === "89");
  },

  "test format shorthand %F": function () {
    assert("%F should be shortcut for %Y-%m-%d",
           Date.formats.F === "%Y-%m-%d");
  }
});*/

/*Part Four*/
testCase("strftime test", {
  setUp: function () {
    //'this' refers to the unnamed object paramer we are passing
    this.date = new Date(1989, 0, 25);
  },

  "test format specifier is %Y": function () {
    assert("%Y should return full year",
           Date.formats.Y(this.date) === 1989);
  },

  "test format specifier %m": function () {
    assert("%m should return month",
           Date.formats.m(this.date) === "01");
  },

  "test format specifier %d": function () {
    assert("%d should return date",
           Date.formats.d(this.date) === "25");
  },

  "test format specifier %y": function () {
    assert("%y should return year as two digits",
           Date.formats.y(this.date) === "89");
  },

  "test format shorthand %F": function () {
    assert("%F should be shortcut for %Y-%m-%d",
           Date.formats.F === "%Y-%m-%d");
  }
});
