
function dartScore (arr) {
	var score = 0;
	var underFive = 0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] < 5) {
			score += 10;
			underFive ++;
		}
		if (arr[i] <=10 && arr[i] >=5 ) {
			score += 5;
		}
		if (underFive === arr.length) {
			score += 100;
		}

	}
	return score;
}

dartScore ([20,15,11]);