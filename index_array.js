// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a不是数组类型，是字符串类型；b是数组类型


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
	a[i] = a[i] * 2;
}
console.log(a);



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function getResult(arr, seperator) {
	var result = "";
	for (let i = 0; i < colors.length; i++) {
		if (i != colors.length - 1)
			result += colors[i] + seperator;
		else
			result += colors[i];
	}
	return result;
}

function output(colors, num) {
	switch (num) {
		case 1:
			return getResult(colors, " ");
			break;
		case 2:
			return getResult(colors, "+");
			break;
		case 3:
			return getResult(colors, ",");
			break;
	}
}

console.log(output(colors, 1));
console.log(output(colors, 2));
console.log(output(colors, 3));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (let i = 0; i < a.length - 1; i++) {
	for (let j = i + 1; j < a.length; j++) {
		if (array[i] < array[j]) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}

console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

let resultMap = new Map();
for (let i = 0; i < a.length; i++) {
	if (resultMap.get(a[i]) != undefined) {
		resultMap.set(a[i], resultMap.get(a[i]) + 1);
	} else {
		resultMap.set(a[i], 1);
	}
}
console.log(resultMap);
let temp = 0;
let result = 0;
resultMap.forEach(function(value, key) {
	if (value > temp) {
		temp = value;
		result = key;
	}
});
console.log(result);
