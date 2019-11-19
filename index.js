function ex1(){
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

function test1() {
	return ex1() === 'This is exercise 1!';
}

function test2() {
	return ex2() === 'Correct';
}

function test3() {
	return ex3() === 'Correct';
}

/* eslint-disable no-console */
console.log('Test 1 passed?: ', test1());
console.log('Test 2 passed?: ', test2());
console.log('Test 3 passed?: ', test3());
