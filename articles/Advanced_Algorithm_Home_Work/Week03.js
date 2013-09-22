Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

function genRandNumArr(num) {
	var arr = [];
	for (var i=0; i<num; ++i)
	arr.push({index:i,value:Math.floor(Math.random()*10)});
	return arr;
}
//Week03 HW01

console.log("Week03 HW01");
var arr = [10,8,5,4,6,3,2,1,9,7];
var min = arr[0];
for (var i=1; i<arr.length; ++i) {
	if (arr[i] < min) {
		min = arr[i];
	}
}
console.log("The minimum in arr is: "+min);


//Week03 HW02
console.log("Week03 HW02");

console.log("Selection Sort:");
var arr = genRandNumArr(10);
console.log("Before sorting:");
console.log(arr);
var work_index = 0
var min = {index:work_index,value:arr[work_index].value};
for (var j=0; j<arr.length; ++j) {
	for (var i=work_index; i<arr.length; ++i) {
		if (arr[i].value < min.value) { //non-stable switch
			min.value = arr[i].value;
			min.index = i;
		}
	}
	arr.swap(work_index,min.index);
	work_index = j;
	min.index = work_index;
	min.value = arr[work_index].value;
}
console.log("After sorting:");
console.log(arr);

console.log("Bubble Sort:");
var arr = genRandNumArr(10);
console.log("Before sorting:");
console.log(arr);
for (var r=arr.length-1; r>=0; --r) {
	for (var i=0; i<r; ++i) {
		if (arr[i].value > arr[i+1].value) { //non-stable switch
			arr.swap(i,i+1);
		}
	}
}
console.log("After sorting:");
console.log(arr);

console.log("Insertion Sort:");
var arr = genRandNumArr(10);
console.log("Before sorting:");
console.log(arr);
for (j=1;j<arr.length ;j++ ) {
	for (var t=j-1; t>=0; --t) {
		if (arr[t].value > arr[t+1].value) { //non-stable switch
			arr.swap(t,t+1);
		}
	}
}
console.log("After sorting:");
console.log(arr);