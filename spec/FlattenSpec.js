describe("Flatten", function() {
  require('../lib/flattenArray.js');

  beforeEach(function() {
    exampleArray = [0, 2, [[2, 3], 8, 100, null, [[null]]], -2];
    nestedArray = [[[[[[[[[[[[[[[[[[[[[[[1, [2, 3]]]]]]]]]]]]]]]]]]]]]]]];
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

  it("should remove nested null values", function() {
    

    exampleArray = exampleArray.flatten();

      var containsNull = false;
      for (var i = exampleArray.length - 1; i >= 0; i--) {
        if(exampleArray[i] === null) {
          containsNull = true;
        }
      }

      expect(containsNull).toEqual(false);
  });

  

  it("should not contain any nested arrays", function() {

    exampleArray = exampleArray.flatten();

    var containsArray = false;
    for (var i = exampleArray.length - 1; i >= 0; i--) {
      if(Array.isArray(exampleArray[i])) {
        containsArray = true;
      }
    }

    expect(containsArray).toEqual(false);
  });

  it("Can flatten very nested values", function() {

    nestedArray = nestedArray.flatten();

    var containsArray = false;
    for (var i = exampleArray.length - 1; i >= 0; i--) {
      if(Array.isArray(exampleArray[i])) {
        containsArray = true;
      }
    }

    expect(containsArray = false);

  });

});