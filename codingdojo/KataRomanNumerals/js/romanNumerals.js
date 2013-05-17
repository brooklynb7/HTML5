var standardRomanNumerals = [
	["","I","II","III","IV","V","VI","VII","VIII","IX"],
	["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
	["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],	
	["","M","MM","MMM","MMMM"]
];

function getDigit(number, pos) {

	return parseInt(number % (Math.pow(10,pos)) / Math.pow(10, pos-1));

}

function convertRomanNumeral (number) {
	var output = "";
	for(var i = standardRomanNumerals.length - 1; i>=0; i--){
		output += standardRomanNumerals[i][getDigit(number, i+1)];
	}
	return output;
}