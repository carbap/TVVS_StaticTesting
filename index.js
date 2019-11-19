function ex1() {
	let number = 50 + (25*2);
	let result = number/100;

	return "This is exercise " + result + "!";
}

function ex2() {
	const x = 20;

	if (x === 19);
	{
		return 'Incorrect';
	}

	return 'Correct';
}

function ex3() {
	var x = 0;

	if (x = 0) {
		return 'Correct'
	}
	else {
		return 'Incorrect'
	}
}

function ex4(n) {
	const result = [0, 1];

	for (var i = 2; i<n; i++) {
		result.push(result[i-2] + result[i-1]);
	}

	let nth_number = result[n-1];
	
	return result[n-1];
}

/*
function ex5() {
	var j = 0;
	var result = 0;

	for(j; j < 10; j--)
		result += j

	return result
}
*/

function test1() {
	return ex1() === 'This is exercise 1!';
}

function test2() {
	return ex2() === 'Correct';
}

function test3() {
	return ex3() === 'Correct';
}

function test4() {
	return ex4(9) === 21;
}

function test5() {
	return ex5() === 45;
}

/* eslint-disable no-console */
console.log('Test 1 passed?: ', test1());
console.log('Test 2 passed?: ', test2());
console.log('Test 3 passed?: ', test3());
console.log('Test 4 passed?: ', test4());
// console.log('Test 5 passed?: ', test5());
