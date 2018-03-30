function main () {
	var a, b;
	//A semi-colon was missing, causing the Console find error with this line
	var c;

	a = 10;
	b = 100;

	b = a + b;
	//By swapping the + operator and variable a, the error of "unexpected identifier" has been rectified
	c == a * b;

	document.writeln(c);
}
