/*jslint indent: 2, plusplus: false, forin: true, onevar: false, eqeqeq: false*/
/*globals assert, output*/


/*modified for slide 14
function testCase(testname, tests) {
  var successful = 0;
  var testCount = 0;

  output("<h1>" + testname + "</h1>");
  for (var test in tests) {
    testCount++;

    try {
      tests[test]();
      output(test, "#0c0");
      successful++;
    } catch (e) {
      output(test + " failed: " + e.message, "#c00");
    }
  }

  var color = successful == testCount ? "#0c0" : "#c00";

  output("<strong>" + testCount + " tests, " +
         (testCount - successful) + " failures</strong>",
         color);
}
*/

/* With setup & teardown */
function testCase(name, tests) {
  assert.count = 0;
  var successful = 0;
  var testCount = 0;
  var hasSetup = typeof tests.setUp == "function";
  var hasTeardown = typeof tests.tearDown == "function";

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++;

    try {
      if (hasSetup) {
        tests.setUp();
      }

      tests[test]();
      output(test, "#0c0");

      if (hasTeardown) {
        tests.tearDown();
      }

      // If the tearDown method throws an error, it is
      // considered a test failure, so we don't count
      // success until all methods have run successfully
      successful++;
    } catch (e) {
      output(test + " failed: " + e.message, "#c00");
    }
  }

  var color = successful == testCount ? "#0c0" : "#c00";

  output("<strong>" + testCount + " tests, " +
         (testCount - successful) + " failures</strong>",
         color);
}
