function isExactlyDividable (number ,divider) {	
	if(isPositiveInteger(number) && isPositiveInteger(divider)){
		return number % divider === 0;
	}
	throw("The input parameter(s) is(are) not positive integer(s)");
}

function isPositiveInteger(input){
	return (parseInt(input) === input && input > 0);
}

function describeNumber(number){
	var result = ""
	if(isExactlyDividable(number,3)){
		result+= "Fizz";
	}
	if(isExactlyDividable(number,5)){
		result+= "Buzz";
	}
	if (result==="") {result = number + ""};
	return result;
}

function describeNumberSequence(from,to){
	if(from>to){
		throw(from + " is greater than " + to);
	}
	var result=[];
	for (var i = from; i <= to; i++) {
      result.push(describeNumber(i));
	};
	return result;
}