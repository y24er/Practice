// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var upper = name.toUpperCase();
console.log("'" + upper + "'");

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr = sentence.split(" ");
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
}
console.log(arr.join(' '));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1));
