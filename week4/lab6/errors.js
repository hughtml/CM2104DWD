function main () {
	var a, b;
	//A semi-colon was missing, causing the Console find error with this line
	var c;

	a = 10;
	b = 100;

	b = a + b;
	//By swapping the + operator and variable a, the error of "unexpected identifier" has been rectified
	c == a * b;
	//As this is syntactically correct, it does not display an error
	//However, this is logically incorrect as "==" will create a Boolean statement of "is c equal to the result of a * b?" aka false, therefore leaving c as undefined

	document.writeln(c);
}
