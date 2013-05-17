module("Fizz Buzz");

test("a number is dividable by another number", function(){
	ok(isExactlyDividable(4,2), "4 is dividable by 2");
	ok(!isExactlyDividable(5,2), "5 is not dividable by 2");
});

test("The input 'number' is not a number", function(){
	throws(function(){
		isExactlyDividable("number", 4);
	}, "raise error message: the input 'number' is not a number");

	throws(function(){
		isExactlyDividable("0", 4);
	}, "raise error message: the input '0' is not a number");	
});

test("The input 'number' is not an integer", function(){
	throws(function(){
		isExactlyDividable(1.5, 4);
	}, "raise error message: the input 'number' is not an integer");	
});

test("The input 'number' is not a positive integer", function(){
	throws(function(){
		isExactlyDividable(-1, 4);
	}, "raise error message");

	throws(function(){
		isExactlyDividable(0, 4);
	}, "raise error message");
});

test("The input 'divider' is not a number", function(){
	throws(function(){
		isExactlyDividable(4,"4");
	}, "raise error message");

	throws(function(){
		isExactlyDividable(4, "0");
	}, "raise error message");	
});

test("The input 'divider' is not an integer", function(){
	throws(function(){
		isExactlyDividable(4, 4.5);
	}, "raise error message");
});

test("The input 'divider' is not a positive integer", function(){
	throws(function(){
		isExactlyDividable(-1, 4);
	}, "raise error message");

	throws(function(){
		isExactlyDividable(0, 4);
	}, "raise error message");
});

test("The input 'divider' is zero", function(){
	throws(function(){
		isExactlyDividable(4, 0);
	}, "raise error message");
});

test("The input parameter is a positive integer", function(){
	ok(isPositiveInteger(1), "1 is a positive integer");
});

test("The input parameter is not a positive integer", function(){
	ok(!isPositiveInteger(-1), "-1 is not a positive integer");
	ok(!isPositiveInteger(1.5), "1.5 is not a positive integer");
	ok(!isPositiveInteger(0), "0 is not a positive integer");
});

test("describe a number", function(){
	strictEqual(describeNumber(1), "1","describe 1");
	strictEqual(describeNumber(3), "Fizz","describe 3");
	strictEqual(describeNumber(5), "Buzz","describe 5");
	strictEqual(describeNumber(15), "FizzBuzz","describe 15");
});

test('describeNumberSequence', function() {
    deepEqual(describeNumberSequence(1,1), ['1'],
    	"describeNumberSequence from 1 to 1");
    deepEqual(describeNumberSequence(1,2), ['1','2'],
    	"describeNumberSequence from 1 to 2");
    deepEqual(describeNumberSequence(1,15), ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'],
    	"describeNumberSequence from 1 to 2");

});

test('descriptionNumberSequence', function() {
	throws(function(){
		describeNumberSequence(2,1);
	}, "raise error message");

	throws(function(){
		describeNumberSequence(-1,1);
	}, "raise error message");	
    
    throws(function(){
		describeNumberSequence(1,-1);
	}, "raise error message");
});