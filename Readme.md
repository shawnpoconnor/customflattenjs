Program requires user to have node.js and Jasmine installed on their computer.

To run test suite enter 'jasmine' into the CL from the ButtonCodeAssesment directory.

To run the function enter 'node lib/runner.js' into the CL from the ButtonCodeAssesment directory.

Runner can be updated by changing values of input1, input2, or input3 to enter custom arrays for flattening.

Custion array method written in JavaScript for flattening nested arrays of varying depths.

Implementation uses are recursive method to flattin a multidimensional array in O(n) time.

Being a prototype of the JS Array object the function is restricted to being called on instances of JS Array. Objects contianed within the flatten function will not be flattened. So the array: [{one: [1, [2]]}, 1, null] would return an array which still contains null values(though they would be nested inside the object). In the future should you want to expand the flatten function to incorperate flattening of objects you would need to write a second function or add a conditional for encountering objects. Array.flatten() is flexable concerning the data input and will return a flattend array reguardless of what it contains. I wrote the function assuming that typal restrictions would be made outside the fuction to keep the function in line with the single responsibility principle.