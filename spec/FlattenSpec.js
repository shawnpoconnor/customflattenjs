describe("Flatten", function() {
  var flatten = require('../lib/flattenArray.js');
  var flatten;

  beforeEach(function() {
    exampleArray = [0, 2, [[2, 3], 8, 100, null, [[null]]], -2];
    nullArray = [null];
  });

  it("should not contain any null values", function() {
    nullArray = nullArray.flatten();

      var containsNull = false;
      for (var i = nullArray.length - 1; i >= 0; i--) {
        if(nullArray[i] === null) {
          containsNull = true;
        }
      }

      expect(containsNull).toEqual(false);
  });

  

  // demonstrates use of spies to intercept and test method calls
  it("should not contain any nested arrays", function() {
    exampleArray = flatten(exampleArray);

    var containsArray = false;
    for (var i = exampleArray.length - 1; i >= 0; i--) {
      if(Array.isArray(exampleArray[i])) {
        containsArray = true;
      }
    }

    expect(containsArray).toEqual(false);
  });

});