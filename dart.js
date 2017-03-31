/*jshint esversion: 6 */
exports.dart = (arr) => {
  if(arr instanceof Array === true){
    var total = 0;
    var perfect = 0;
    for (var i=0; i < arr.length; i++){
      if(typeof arr[i] !== 'number'){
        throw new Error('wrong data type');
      }
      if (arr[i] < 5 && arr[i] >= 0){
        total += 10;
        perfect ++;
      }
      if (arr[i] <= 10 && arr[i] >= 5){
        total += 5;
      }
      if (perfect === arr.length){
        total += 100;
      }
    }
    return total;
	} else {
    throw new Error('wrong data type');
  }
};

