function flatten(array, prevous) {
	var flattenedArr = prevous || [];

	for (var i = 0; i < array.length; i++) {
		if(Array.isArray(array[i])) {
			flatten(array[i], flattenedArr);
		} else if(array[i] === null) {
		} else {
			flattenedArr.push(array[i]);
		}
	}

	return flattenedArr;
}