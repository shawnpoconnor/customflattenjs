Array.prototype.flatten = function(prevous) {
	var flattenedArr = prevous || [];

	for (var i = 0; i < this.length; i++) {
		if(Array.isArray(this[i])) {
			this[i].flatten(flattenedArr);
		} else if(this[i] === null) {
		} else {
			flattenedArr.push(this[i]);
		}
	}

	return flattenedArr;
}
