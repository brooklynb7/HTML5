module("Roman Numerals");

test("Get digit of a number", function(){
	equal(getDigit(123,2), 2, "123 => 2");	
	equal(getDigit(123,4), 0, "123 => 0");
});

test("Convert roman numeral", function(){
	equal(convertRomanNumeral(1), "I", "convert 1 to I");
	equal(convertRomanNumeral(2), "II", "convert 2 to II");
	equal(convertRomanNumeral(3), "III", "convert 3 to III");
	equal(convertRomanNumeral(4), "IV", "convert 4 to IV");
	equal(convertRomanNumeral(5), "V", "convert 5 to V");
	equal(convertRomanNumeral(6), "VI", "convert 6 to VI");
	equal(convertRomanNumeral(7), "VII", "convert 7 to VI");
	equal(convertRomanNumeral(8), "VIII", "convert 8 to VI");
	equal(convertRomanNumeral(9), "IX", "convert 9 to IX");

	equal(convertRomanNumeral(10), "X", "convert 10 to X");
	equal(convertRomanNumeral(11), "XI", "convert 11 to XI");

	equal(convertRomanNumeral(111), "CXI", "convert 111 to CXI");
	equal(convertRomanNumeral(990), "CMXC", "convert 990 to CMXC");
	equal(convertRomanNumeral(1111), "MCXI", "convert 111 to MCXI");
	equal(convertRomanNumeral(1999), "MCMXCIX", "convert 1999 to MCMXCIX");
});

